import { Card } from '@/components/ui/card';
import { BudgetTypeType } from '@/lib/helper/modules/budget';
import { cn } from '@/lib/utils';
import BudgetTypeDelete from './BudgetTypeDelete';
import { BudgetTypeEdit } from './BudgetTypeEdit';
import BudgetTypeStatus from './BudgetTypeStatus';

const BudgetType = async ({
	type,
	admin,
}: {
	type: BudgetTypeType;
	admin: boolean;
}) => {
	return (
		<Card
			className={cn(
				'flex items-center justify-between p-3',
				type.status === 0
					? 'inactive'
					: type.name === 'Expense'
						? 'expense'
						: type.name === 'Income'
							? 'income'
							: null,
			)}
		>
			<strong>{type.name}</strong>
			{admin && (
				<div className="flex items-center gap-1">
					<BudgetTypeEdit type={type} />
					<BudgetTypeDelete type={type} />
					<BudgetTypeStatus type={type} />
				</div>
			)}
		</Card>
	);
};

export default BudgetType;
