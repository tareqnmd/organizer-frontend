import { BudgetDashboardOverviewType } from '@/lib/helper/budget';
import BudgetCategoryStats from './BudgetCategoryStats';
import BudgetStatsCards from './BudgetStatsCards';
import BudgetWarning from './BudgetWarning';

const BudgetOverview = ({
	overview,
}: {
	overview: BudgetDashboardOverviewType;
}) => {
	const { amount_info, category } = overview;
	return (
		<>
			<BudgetWarning amount={amount_info} />
			<BudgetStatsCards amount={amount_info} />
			<BudgetCategoryStats category={category} />
		</>
	);
};

export default BudgetOverview;
