import { generateDataFromServer, nextProperties } from '@/helper/shared/server-fetch';
import {
	BudgetCategoryParamType,
	BudgetCategoryType,
} from '@/helper/modules/budget';
import BudgetCategoriesFilter from './BudgetCategoriesFilter';
import BudgetCategoryAdd from './BudgetCategoryAdd';
import BudgetCategoryCard from './BudgetCategoryCard';

const BudgetCategories = async ({
	searchParams,
}: {
	searchParams: BudgetCategoryParamType;
}) => {
	const queryParams = new URLSearchParams(searchParams);
	const url = `budget/type-categories?${queryParams}`;
	const { data: categories } = await generateDataFromServer(
		url,
		nextProperties({})
	);

	return (
		<>
			<div className="flex items-center gap-2 mb-4 sm:w-[80%] md:w-[60%] xl:w-[40%] ml-auto">
				<BudgetCategoriesFilter searchParams={searchParams} />
				<BudgetCategoryAdd />
			</div>
			<div
				className="grid grid-cols-1 sm:grid-cols-2
     lg:grid-cols-3 xl:grid-cols-4 gap-2"
			>
				{categories?.map((category: BudgetCategoryType) => (
					<BudgetCategoryCard
						key={category.id}
						category={category}
					/>
				))}
			</div>
		</>
	);
};

export default BudgetCategories;
