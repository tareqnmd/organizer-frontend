import Transactions from '@/components/modules/budget/transaction/BudgetTransactions';
import { BudgetTransactionParamType } from '@/types/modules/budget/budget-transaction-types';
import { endOfMonth, startOfMonth } from 'date-fns';

const Page = ({
	searchParams,
}: {
	searchParams: BudgetTransactionParamType;
}) => {
	return (
		<Transactions
			searchOptions={{
				...searchParams,
				from: searchParams.from ?? startOfMonth(new Date()),
				to: searchParams.to ?? endOfMonth(new Date()),
			}}
		/>
	);
};

export default Page;
