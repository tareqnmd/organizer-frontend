import { BudgetCategory } from '../../../../types/modules/budget/budget-category-types';
import BudgetCategoryDelete from './BudgetCategoryDelete';
import BudgetCategoryEdit from './BudgetCategoryEdit';
import BudgetCategoryStatus from './BudgetCategoryStatus';

const BudgetCategoryAction = ({ category }: { category: BudgetCategory }) => {
	return (
		<div className="flex items-center gap-1">
			<BudgetCategoryEdit category={category} />
			<BudgetCategoryDelete category={category} />
			<BudgetCategoryStatus category={category} />
		</div>
	);
};

export default BudgetCategoryAction;
