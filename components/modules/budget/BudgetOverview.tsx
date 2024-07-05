import BudgetCategoryStats from './BudgetCategoryStats';
import BudgetStatsCards from './BudgetStatsCards';

const BudgetOverview = () => {
	return (
		<div className="container flex w-full flex-col gap-2">
			<BudgetStatsCards />
			<BudgetCategoryStats />
		</div>
	);
};

export default BudgetOverview;
