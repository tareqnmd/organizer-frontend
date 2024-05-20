import Transactions from '@/components/modules/budget/transaction/BudgetTransactions';
import { BudgetTransactionParamType } from '@/types/modules/budget/budget-transaction-types';

const Page = ({
	searchParams,
}: {
	searchParams: BudgetTransactionParamType;
}) => {
	return <Transactions searchOptions={searchParams} />;
};

export default Page;
