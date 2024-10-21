import Budget from '@/components/modules/budget/dashboard/Budget';
import { baseDateFormat } from '@/helper/shared/date';
import { endOfMonth, startOfMonth } from 'date-fns';

const Page = ({ searchParams }: { searchParams: any }) => {
	return (
		<Budget
			searchParams={{
				...searchParams,
				from: searchParams.from ?? baseDateFormat(startOfMonth(new Date())),
				to: searchParams.to ?? baseDateFormat(endOfMonth(new Date())),
			}}
		/>
	);
};

export default Page;
