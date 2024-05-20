import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BudgetTypeType } from '@/types/modules/budget/budget-type-types';
import BudgetTypeDelete from './BudgetTypeDelete';
import { BudgetTypeEdit } from './BudgetTypeEdit';
import BudgetTypeStatus from './BudgetTypeStatus';

const BudgetType = async ({ type, admin }: { type: BudgetTypeType; admin: boolean }) => {
	return (
		<Card
			className={cn(
				'p-3 flex justify-between items-center',
				type.status === 0
					? 'bg-gray-200 text-gray-400'
					: type.name === 'Expense'
					? 'bg-red-200'
					: type.name === 'Income'
					? 'bg-green-200'
					: null
			)}
		>
			<span>{type.name}</span>
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
