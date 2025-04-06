import {
	BudgetCategoryParamType,
	BudgetCategoryType,
} from '@/lib/helper/budget';
import { generateDataFromServer, nextProperties } from '@/lib/utils';
import BudgetCategoriesFilter from './BudgetCategoriesFilter';
import BudgetCategoriesWrapper from './BudgetCategoriesWrapper';
import BudgetCategoryAdd from './BudgetCategoryAdd';
import BudgetCategoryCard from './BudgetCategoryCard';

const BudgetCategories = async ({
	searchParams,
}: {
	searchParams: BudgetCategoryParamType;
}) => {
	const queryParams = new URLSearchParams(searchParams);
	const url = `budget/type-categories?${queryParams}`;
	const {
		data: { incomeCategories = [], expenseCategories = [] },
	} = await generateDataFromServer(url, nextProperties({}));

	return (
		<div className="flex flex-col gap-4">
			<div className="ml-auto flex items-center gap-2 sm:w-[80%] md:w-[60%] xl:w-[40%]">
				<BudgetCategoriesFilter searchParams={searchParams} />
				<BudgetCategoryAdd />
			</div>

			<BudgetCategoriesWrapper title="Income Categories">
				{incomeCategories.map((category: BudgetCategoryType) => (
					<BudgetCategoryCard key={category.id} category={category} />
				))}
			</BudgetCategoriesWrapper>

			<BudgetCategoriesWrapper title="Expense Categories">
				{expenseCategories.map((category: BudgetCategoryType) => (
					<BudgetCategoryCard key={category.id} category={category} />
				))}
			</BudgetCategoriesWrapper>
		</div>
	);
};

export default BudgetCategories;
