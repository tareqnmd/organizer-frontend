import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import BudgetCategoryAction from './BudgetCategoryAction';
import { BudgetCategoryType } from '@/types/modules/budget/budget-category-types';
const BudgetCategoryCard = async ({
	category,
	admin,
}: {
	category: BudgetCategoryType;
	admin: boolean;
}) => {
	return (
		<Card
			className={cn(
				'p-3 flex justify-between items-center',
				category.status === 0
					? 'inactive'
					: category.type === 'Expense'
					? 'expense'
					: category.type === 'Income'
					? 'income'
					: null
			)}
		>
			<strong>{category.name}</strong>
			{admin && <BudgetCategoryAction category={category} />}
		</Card>
	);
};

export default BudgetCategoryCard;
