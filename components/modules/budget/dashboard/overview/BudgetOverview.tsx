import { BudgetDashboardOverviewType } from '@/lib/helper/budget';
import BudgetCategoryStats from './BudgetCategoryStats';
import BudgetStatsCards from './BudgetStatsCards';

const BudgetOverview = ({
	overview,
}: {
	overview: BudgetDashboardOverviewType;
}) => {
	const { amount_info, category } = overview;
	return (
		<>
			<BudgetStatsCards amount={amount_info} />
			<BudgetCategoryStats category={category} />
		</>
	);
};

export default BudgetOverview;
