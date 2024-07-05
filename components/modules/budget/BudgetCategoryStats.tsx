import SkeletonWrapper from '@/components/common/SkeletonWrapper';
import BudgetCategoryCard from './BudgetCategoryCard';

function BudgetCategoryStats() {
	const statsQuery = { data: [] };

	return (
		<div className="flex w-full flex-wrap gap-2 md:flex-nowrap">
			<SkeletonWrapper isLoading={false}>
				<BudgetCategoryCard
					type="income"
					data={statsQuery.data || []}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetCategoryCard
					type="expense"
					data={statsQuery.data || []}
				/>
			</SkeletonWrapper>
		</div>
	);
}

export default BudgetCategoryStats;
