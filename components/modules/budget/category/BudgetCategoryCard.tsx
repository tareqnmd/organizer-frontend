import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BudgetCategoryType } from '@/types/modules/budget/budget-category-types';
import BudgetCategoryAction from './BudgetCategoryAction';
const BudgetCategoryCard = async ({
	category,
}: {
	category: BudgetCategoryType;
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
			<BudgetCategoryAction category={category} />
		</Card>
	);
};

export default BudgetCategoryCard;
