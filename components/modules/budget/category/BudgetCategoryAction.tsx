import { BudgetCategoryType } from '@/lib/helper/modules/budget';
import BudgetCategoryDelete from './BudgetCategoryDelete';
import BudgetCategoryEdit from './BudgetCategoryEdit';
import BudgetCategoryStatus from './BudgetCategoryStatus';

const BudgetCategoryAction = ({
	category,
}: {
	category: BudgetCategoryType;
}) => {
	return (
		<div className="flex items-center gap-1">
			{category.status === 1 ? (
				<BudgetCategoryEdit category={category} />
			) : null}
			<BudgetCategoryDelete category={category} />
			<BudgetCategoryStatus category={category} />
		</div>
	);
};

export default BudgetCategoryAction;
