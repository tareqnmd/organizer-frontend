import { generateDataFromServer } from '@/lib/helper/fetch';
import { BudgetTransactionParamType } from '@/types/modules/budget/budget-transaction-types';
import BudgetTransactionAdd from './BudgetTransactionAdd';
import BudgetTransactionFilter from './BudgetTransactionFilter';
import BudgetTransactionsTable from './BudgetTransactionsTable';

const Transactions = async ({
	searchOptions,
}: {
	searchOptions: BudgetTransactionParamType;
}) => {
	const queryParams = new URLSearchParams(searchOptions);
	const url = `budget/transactions?${queryParams}`;
	const { data: transactions } = await generateDataFromServer(url, {
		next: { revalidate: 0 },
	});
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
