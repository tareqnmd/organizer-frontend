import { Card } from '@/components/ui/card';
import { authOptions } from '@/lib/auth-options';
import { cn } from '@/lib/utils';
import { getServerSession } from 'next-auth';
import { BudgetCategory } from '../../../../types/modules/budget/budget-category-types';
import BudgetCategoryAction from './BudgetCategoryAction';

const BudgetCategoryCard = async ({
	category,
	admin,
}: {
	category: BudgetCategory;
	admin: boolean;
}) => {
	return (
		<Card
			className={cn(
				'p-3 flex justify-between items-center',
				category.status === 0
					? 'bg-gray-200 text-gray-400'
					: category.type === 'Expense'
					? 'bg-red-200'
					: category.type === 'Income'
					? 'bg-green-200'
					: null
			)}
		>
			<div className="category-info flex gap-1">
				<strong>{category.name}</strong>
				<span>({category.type})</span>
			</div>
			{admin && <BudgetCategoryAction category={category} />}
		</Card>
	);
};

export default BudgetCategoryCard;
