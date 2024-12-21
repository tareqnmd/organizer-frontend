import BudgetCategories from '@/components/modules/budget/category/BudgetCategories';
import { BudgetCategoryParamType } from '@/lib/helper/budget';

const BudgetTypeCategoryPage = ({
	searchParams,
}: {
	searchParams: BudgetCategoryParamType;
}) => {
	return <BudgetCategories searchParams={searchParams} />;
};

export default BudgetTypeCategoryPage;
