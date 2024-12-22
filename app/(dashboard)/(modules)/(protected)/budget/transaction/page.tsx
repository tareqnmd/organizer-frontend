import Transactions from '@/components/modules/budget/transaction/BudgetTransactions';
import { BudgetTransactionParamType } from '@/lib/helper/budget';
import { baseDateFormat } from '@/lib/utils';
import { endOfMonth, startOfMonth } from 'date-fns';

const BudgetTransactionPage = ({
	searchParams,
}: {
	searchParams: BudgetTransactionParamType;
}) => {
	return (
		<Transactions
			searchOptions={{
				...searchParams,
				from:
					searchParams.from ??
					baseDateFormat(startOfMonth(new Date())),
				to: searchParams.to ?? baseDateFormat(endOfMonth(new Date())),
			}}
		/>
	);
};

export default BudgetTransactionPage;
