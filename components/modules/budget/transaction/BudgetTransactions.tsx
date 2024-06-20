import { generateDataFromServer } from '@/lib/helper/fetch';
import { BudgetTransactionParamType } from '@/types/modules/budget/budget-transaction-types';
import BudgetTransactionsTable from './BudgetTransactionsTable';
import BudgetTransactionsWrapper from './BudgetTransactionsWrapper';

const Transactions = async ({
	searchOptions,
}: {
	searchOptions: BudgetTransactionParamType;
}) => {
	const queryParams = new URLSearchParams(searchOptions);
	const url = `budget/transactions?${queryParams}`;
	const { data: transactions = [], total = 0 } = await generateDataFromServer(
		url,
		{
			next: { revalidate: 0 },
		}
	);
	return (
		<BudgetTransactionsWrapper
			searchOptions={searchOptions}
			totalTransactions={total}
		>
			<BudgetTransactionsTable transactions={transactions} />
		</BudgetTransactionsWrapper>
	);
};

export default Transactions;
