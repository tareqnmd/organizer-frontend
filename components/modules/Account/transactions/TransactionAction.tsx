import { cn } from '@/lib/utils';
import Link from 'next/link';
import { TransactionParamType } from './Transactions';

const TransactionAction = ({ params }: { params: TransactionParamType }) => {
	return (
		<div className="flex item-center justify-end gap-2">
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					Object.keys(params).length === 0 && 'border-gray-950'
				)}
				href="/budget/transactions"
			>
				All
			</Link>
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					params?.type === 'Income' && 'border-gray-950'
				)}
				href="/budget/transactions?type=Income"
			>
				Income
			</Link>
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					params?.type === 'Expense' && 'border-gray-950'
				)}
				href="/budget/transactions?type=Expense"
			>
				Expense
			</Link>
		</div>
	);
};

export default TransactionAction;
