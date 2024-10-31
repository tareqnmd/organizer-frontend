import { Card } from '@/components/ui/card';
import {
	BudgetCategoryType,
	getBudgetTypeClassName,
} from '@/lib/helper/budget';
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
				getBudgetTypeClassName(category),
			)}
		>
			<strong>{category.name}</strong>
			<BudgetCategoryAction category={category} />
		</Card>
	);
};

export default BudgetCategoryCard;
