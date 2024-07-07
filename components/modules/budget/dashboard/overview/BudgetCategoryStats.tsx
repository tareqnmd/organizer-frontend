import SkeletonWrapper from '@/components/common/SkeletonWrapper';
import BudgetCategoryCard from './BudgetCategoryCard';

function BudgetCategoryStats({
	category,
}: {
	category: {
		income: {
			name: string;
			amount: number;
			percentage: number;
		}[];
		expense: {
			name: string;
			amount: number;
			percentage: number;
		}[];
	};
}) {
	const { income = [], expense = [] } = category;

	return (
		<div className="flex w-full flex-wrap gap-4 lg:flex-nowrap">
			<SkeletonWrapper isLoading={false}>
				<BudgetCategoryCard
					type="income"
					data={income}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetCategoryCard
					type="expense"
					data={expense}
				/>
			</SkeletonWrapper>
		</div>
	);
}

export default BudgetCategoryStats;
