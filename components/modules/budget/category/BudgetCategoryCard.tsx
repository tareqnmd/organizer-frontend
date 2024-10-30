import { Card } from '@/components/ui/card';
import { BudgetCategoryType, TransactionTypeEnum } from '@/lib/helper/budget';
import { cn } from '@/lib/utils';
import BudgetCategoryAction from './BudgetCategoryAction';
const BudgetCategoryCard = async ({
	category,
}: {
	category: BudgetCategoryType;
}) => {
	return (
		<Card
			className={cn(
				'flex items-center justify-between p-3',
				category.status === 0
					? 'inactive'
					: category.type === TransactionTypeEnum.EXPENSE
						? 'expense'
						: category.type === TransactionTypeEnum.INCOME
							? 'income'
							: null,
			)}
		>
			<strong>{category.name}</strong>
			<BudgetCategoryAction category={category} />
		</Card>
	);
};

export default BudgetCategoryCard;
