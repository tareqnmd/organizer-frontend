import { authFetch } from '@/lib/fetch';
import BudgetCategoriesFilter from './BudgetCategoriesFilter';
import BudgetCategoryAdd from './BudgetCategoryAdd';
import BudgetCategoryCard from './BudgetCategoryCard';
import { BudgetCategory } from './budget-category-types';

const getBudgetCategories = async () => {
	try {
		const res = await authFetch(`budget/type-categories`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {}
};

const BudgetCategories = async () => {
	const categories = await getBudgetCategories();
	return (
		<>
			<div className="flex justify-end items-center gap-2 mb-3">
				<BudgetCategoriesFilter />
				<BudgetCategoryAdd />
			</div>
			<div
				className="grid grid-cols-1 sm:grid-cols-2
     lg:grid-cols-3 xl:grid-cols-4 gap-2"
			>
				{categories?.map((category: BudgetCategory) => (
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
