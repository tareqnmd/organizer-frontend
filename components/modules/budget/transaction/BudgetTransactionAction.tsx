import { cn } from '@/lib/utils';
import { BudgetTransactionParamType } from '@/types/modules/budget/budget-transaction-types';
import Link from 'next/link';

const BudgetTransactionAction = ({
	params,
}: {
	params: BudgetTransactionParamType;
}) => {
	return (
		<div className="flex item-center justify-end gap-2">
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					Object.keys(params).length === 0 && 'border-gray-950'
				)}
				href="/budget/transaction"
			>
				All
			</Link>
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					params?.type === 'Income' && 'border-gray-950'
				)}
				href="/budget/transaction?type=Income"
			>
				Income
			</Link>
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					params?.type === 'Expense' && 'border-gray-950'
				)}
				href="/budget/transaction?type=Expense"
			>
				Expense
			</Link>
		</div>
	);
};

export default BudgetTransactionAction;
