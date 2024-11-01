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
				'basic-card flex items-center justify-between active:scale-100',
				getBudgetTypeClassName({
					id: category.typeId,
					name: category.type,
					status: category.status,
				}),
			)}
		>
			<strong>{category.name}</strong>
			<BudgetCategoryAction category={category} />
		</Card>
	);
};

export default BudgetCategoryCard;
