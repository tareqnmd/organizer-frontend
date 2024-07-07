import BudgetCategoryStats from './BudgetCategoryStats';
import BudgetStatsCards from './BudgetStatsCards';

const BudgetOverview = ({ overview }: { overview: any }) => {
	const { amount_info } = overview;
	return (
		<div className="container flex w-full flex-col gap-2">
			<BudgetStatsCards amount={amount_info} />
			<BudgetCategoryStats />
		</div>
	);
};

export default BudgetOverview;
