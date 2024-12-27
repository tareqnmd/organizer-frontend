import SkeletonWrapper from '@/components/common/SkeletonWrapper';
import {
	BudgetDashboardOverviewCategoryType,
	TransactionTypeEnum,
} from '@/lib/helper/budget';
import BudgetCategoryCard from './BudgetCategoryCard';

function BudgetCategoryStats({
	category,
}: {
	category: BudgetDashboardOverviewCategoryType;
}) {
	const { income = [], expense = [], saving = [] } = category || {};

	return (
		<div className="grid gap-4 md:grid-cols-2">
			<div className="flex flex-col gap-4">
				<SkeletonWrapper isLoading={false}>
					<BudgetCategoryCard
						type={TransactionTypeEnum.INCOME}
						data={income}
					/>
				</SkeletonWrapper>
				<SkeletonWrapper isLoading={false}>
					<BudgetCategoryCard
						type={TransactionTypeEnum.SAVING}
						data={saving}
					/>
				</SkeletonWrapper>
			</div>
			<SkeletonWrapper isLoading={false}>
				<BudgetCategoryCard
					type={TransactionTypeEnum.EXPENSE}
					data={expense}
				/>
			</SkeletonWrapper>
		</div>
	);
}

export default BudgetCategoryStats;
