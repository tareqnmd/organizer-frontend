import Transactions from '@/components/modules/budget/transaction/BudgetTransactions';
import { BudgetTransactionParamType } from '@/helper/modules/budget';
import { baseDateFormat } from '@/helper/shared/date';
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
				from: searchParams.from ?? baseDateFormat(startOfMonth(new Date())),
				to: searchParams.to ?? baseDateFormat(endOfMonth(new Date())),
			}}
		/>
	);
};

export default Page;
