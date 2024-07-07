import BudgetCategoryStats from './BudgetCategoryStats';
import BudgetStatsCards from './BudgetStatsCards';

const BudgetOverview = ({ overview }: { overview: any }) => {
	const { amount_info = {}, category = {} } = overview;
	return (
		<>
			<BudgetStatsCards amount={amount_info} />
			<BudgetCategoryStats category={category} />
		</>
	);
};

export default BudgetOverview;
