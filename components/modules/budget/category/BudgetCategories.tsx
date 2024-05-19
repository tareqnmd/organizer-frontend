import { authOptions } from '@/lib/auth-options';
import { authFetch } from '@/lib/fetch';
import { getServerSession } from 'next-auth';
import { BudgetCategory } from '../../../../types/modules/budget/budget-category-types';
import BudgetCategoriesFilter from './BudgetCategoriesFilter';
import BudgetCategoryAdd from './BudgetCategoryAdd';
import BudgetCategoryCard from './BudgetCategoryCard';

const getBudgetCategories = async () => {
	try {
		const res = await authFetch(`budget/type-categories`, {
			cache: 'no-store',
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {}
};

const BudgetCategories = async () => {
	const categories = await getBudgetCategories();
	const session = await getServerSession(authOptions);

	return (
		<>
			<div className="flex justify-end items-center gap-2 mb-3">
				<BudgetCategoriesFilter />
				{session?.user?.role === 'admin' && <BudgetCategoryAdd />}
			</div>
			<div
				className="grid grid-cols-1 sm:grid-cols-2
     lg:grid-cols-3 xl:grid-cols-4 gap-2"
			>
				{categories?.map((category: BudgetCategory) => (
					<BudgetCategoryCard
						key={category.id}
						category={category}
						admin={session?.user?.role === 'admin'}
					/>
				))}
			</div>
		</>
	);
};

export default BudgetCategories;
