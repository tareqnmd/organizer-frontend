import BudgetCategoryStats from './BudgetCategoryStats';
import BudgetStatsCards from './BudgetStatsCards';

const BudgetOverview = ({ overview }: { overview: any }) => {
	const { amount_info } = overview;
	return (
		<>
			<BudgetStatsCards amount={amount_info} />
			<BudgetCategoryStats />
		</>
	);
};

export default BudgetOverview;
