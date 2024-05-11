import Transaction, {
	TransactionParamType,
} from '@/components/modules/budget/transaction/Transactions';

const Page = ({ searchParams }: { searchParams: TransactionParamType }) => {
	return <Transaction searchOptions={searchParams} />;
};

export default Page;
