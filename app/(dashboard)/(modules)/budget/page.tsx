import Budget from '@/components/modules/budget/dashboard/Budget';

const Page = ({ searchParams }: { searchParams: any }) => {
	return <Budget searchParams={searchParams} />;
};

export default Page;
