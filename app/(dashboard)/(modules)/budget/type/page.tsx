import TransactionTypes, {
	TypesParamType,
} from '@/components/modules/budget/type/BudgetTypes';

const Page = ({ searchParams }: { searchParams: TypesParamType }) => {
	return <TransactionTypes searchOptions={searchParams} />;
};

export default Page;
