import { authOptions } from '@/lib/auth-options';
import { authFetch } from '@/lib/fetch';
import {
	BudgetCategoryParamType,
	BudgetCategoryType,
} from '@/types/modules/budget/budget-category-types';
import { getServerSession } from 'next-auth';
import BudgetCategoriesFilter from './BudgetCategoriesFilter';
import BudgetCategoryAdd from './BudgetCategoryAdd';
import BudgetCategoryCard from './BudgetCategoryCard';

const getBudgetCategories = async (searchParams: BudgetCategoryParamType) => {
	try {
		const queryParams = new URLSearchParams(searchParams);
		const res = await authFetch(`budget/type-categories?${queryParams}`, {
			cache: 'no-store',
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const BudgetCategories = async ({
	searchParams,
}: {
	searchParams: BudgetCategoryParamType;
}) => {
	const categories = await getBudgetCategories(searchParams);
	const session = await getServerSession(authOptions);
	return (
		<>
			<div className="flex items-center gap-2 mb-4 sm:w-[80%] md:w-[60%] xl:w-[40%] ml-auto">
				<BudgetCategoriesFilter searchParams={searchParams} />
				{session?.user?.role === 'admin' && <BudgetCategoryAdd />}
			</div>
			<div
				className="grid grid-cols-1 sm:grid-cols-2
     lg:grid-cols-3 xl:grid-cols-4 gap-2"
			>
				{categories?.map((category: BudgetCategoryType) => (
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
