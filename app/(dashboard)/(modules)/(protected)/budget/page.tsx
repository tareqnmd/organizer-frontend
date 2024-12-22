import Budget from '@/components/modules/budget/dashboard/Budget';
import { BudgetDashboardSearchParamsType } from '@/lib/helper/budget';
import { baseDateFormat } from '@/lib/utils';
import { endOfMonth, startOfMonth } from 'date-fns';

const BudgetPage = ({
	searchParams,
}: {
	searchParams: BudgetDashboardSearchParamsType;
}) => {
	return (
		<Budget
			searchParams={{
				...searchParams,
				from:
					searchParams.from ??
					baseDateFormat(startOfMonth(new Date())),
				to: searchParams.to ?? baseDateFormat(endOfMonth(new Date())),
			}}
		/>
	);
};

export default BudgetPage;
