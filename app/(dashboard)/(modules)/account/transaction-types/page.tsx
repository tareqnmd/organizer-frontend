import TransactionTypes, {
	TypesParamType,
} from '@/components/modules/Account/type/TransactionTypes';

const Page = ({ searchParams }: { searchParams: TypesParamType }) => {
	return <TransactionTypes searchOptions={searchParams} />;
};

export default Page;
