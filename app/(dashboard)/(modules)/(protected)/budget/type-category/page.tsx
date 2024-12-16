import BudgetCategories from '@/components/modules/budget/category/BudgetCategories';
import { BudgetCategoryParamType } from '@/lib/helper/budget';

const Page = ({ searchParams }: { searchParams: BudgetCategoryParamType }) => {
	return <BudgetCategories searchParams={searchParams} />;
};

export default Page;
