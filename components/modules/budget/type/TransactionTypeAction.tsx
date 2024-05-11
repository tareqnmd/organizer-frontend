import { cn } from '@/lib/utils';
import Link from 'next/link';
import { TypesParamType } from './TransactionTypes';
7;

const TransactionTypeAction = ({ params }: { params: TypesParamType }) => {
	return (
		<div className="flex item-center justify-end gap-2">
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					Object.keys(params).length === 0 && 'border-gray-950'
				)}
				href="/budget/types"
			>
				All
			</Link>
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					params?.type === 'Income' && 'border-gray-950'
				)}
				href="/budget/types?type=Income"
			>
				Income
			</Link>
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					params?.type === 'Expense' && 'border-gray-950'
				)}
				href="/budget/types?type=Expense"
			>
				Expense
			</Link>
		</div>
	);
};

export default TransactionTypeAction;
