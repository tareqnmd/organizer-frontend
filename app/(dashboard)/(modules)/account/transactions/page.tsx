import Transaction, {
	TransactionParamType,
} from '@/components/modules/Account/transactions/Transactions';

const Page = ({ searchParams }: { searchParams: TransactionParamType }) => {
	return <Transaction searchOptions={searchParams} />;
};

export default Page;
