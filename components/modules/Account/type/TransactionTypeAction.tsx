import { cn } from '@/lib/utils';
import Link from 'next/link';
import { TypesParamType } from './TransactionTypes';
7;

const TransactionTypeAction = ({ params }: { params: TypesParamType }) => {
	return (
		<div className="flex item-center justify-end gap-2 mb-3">
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					Object.keys(params).length === 0 && 'border-gray-950'
				)}
				href="/account/transaction-types"
			>
				All
			</Link>
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					params?.income === '1' && 'border-gray-950'
				)}
				href="/account/transaction-types?income=1"
			>
				Income
			</Link>
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					params?.expense === '1' && 'border-gray-950'
				)}
				href="/account/transaction-types?expense=1"
			>
				Expense
			</Link>
		</div>
	);
};

export default TransactionTypeAction;
