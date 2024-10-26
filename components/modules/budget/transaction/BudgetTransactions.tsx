import { BudgetTransactionParamType } from '@/lib/helper/modules/budget';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/shared/server-fetch';
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
		nextProperties({}),
	);
	return (
		<BudgetTransactionsWrapper
			searchOptions={{
				category: searchOptions.category ?? '',
				type: searchOptions.type ?? '',
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
