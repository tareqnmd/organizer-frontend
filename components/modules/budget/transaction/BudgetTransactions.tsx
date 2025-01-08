import { BudgetTransactionParamType } from '@/lib/helper/budget';
import { generateDataFromServer, nextProperties } from '@/lib/utils';
import BudgetTransactionsTable from './BudgetTransactionsTable';
import BudgetTransactionsWrapper from './BudgetTransactionsWrapper';

const Transactions = async ({
	searchOptions,
}: {
	searchOptions: BudgetTransactionParamType;
}) => {
	const queryParams = new URLSearchParams();
	Object.entries(searchOptions).forEach(([key, value]) => {
		if (value !== null) queryParams.append(key, value);
	});
	const url = `budget/transactions?${queryParams}`;
	const { data: transactions = [], total = 0 } = await generateDataFromServer(
		url,
		nextProperties({}),
	);
	return (
		<BudgetTransactionsWrapper
			searchOptions={{
				category: searchOptions.category ?? '',
				type: searchOptions.type,
				transaction: searchOptions.transaction ?? '',
				from: searchOptions.from ?? '',
				to: searchOptions.to ?? '',
				page: searchOptions.page ?? '1',
				perPage: searchOptions.perPage ?? '10',
			}}
			totalTransactions={total}
		>
			<BudgetTransactionsTable transactions={transactions} />
		</BudgetTransactionsWrapper>
	);
};

export default Transactions;
