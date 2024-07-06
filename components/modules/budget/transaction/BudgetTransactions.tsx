import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
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
		nextProperties({})
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
