import { serverAuthFetch } from '@/lib/helper/fetch';
import { BudgetTransactionParamType } from '@/types/modules/budget/budget-transaction-types';
import BudgetTransactionAdd from './BudgetTransactionAdd';
import BudgetTransactionFilter from './BudgetTransactionFilter';
import BudgetTransactionsTable from './BudgetTransactionsTable';

const getTransactions = async (params: BudgetTransactionParamType) => {
	try {
		const queryParams = new URLSearchParams(params);
		const res = await serverAuthFetch(`budget/transactions?${queryParams}`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const Transactions = async ({
	searchOptions,
}: {
	searchOptions: BudgetTransactionParamType;
}) => {
	const transactions = await getTransactions(searchOptions);
	return (
		<>
			<div className="grid grid-cols-4 gap-2 mb-4">
				<BudgetTransactionFilter searchParams={searchOptions} />
				<BudgetTransactionAdd />
			</div>
			<BudgetTransactionsTable transactions={transactions} />
		</>
	);
};

export default Transactions;
