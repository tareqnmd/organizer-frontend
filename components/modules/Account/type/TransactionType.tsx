import { Card } from '@/components/ui/card';
import { auth_options } from '@/lib/auth-options';
import { cn } from '@/lib/utils';
import { getServerSession } from 'next-auth';
import TransactionTypeDelete from './TransactionTypeDelete';
import { TransactionTypeEdit } from './TransactionTypeEdit';
import TransactionTypeToggle from './TransactionTypeToggle';
import { Type } from './TransactionTypes';

const TransactionType = async ({ type }: { type: Type }) => {
	const session = await getServerSession(auth_options);

	return (
		<Card
			className={cn(
				'p-3 flex justify-between items-center',
				type.status === 0
					? 'bg-gray-200 text-gray-400'
					: type.type === 'Expense'
					? 'bg-red-200'
					: type.type === 'Income'
					? 'bg-green-200'
					: null
			)}
		>
			<span>{type.name}</span>
			{session?.user?.role === 'admin' && (
				<div className='flex items-center gap-1'>
					<TransactionTypeEdit type={type} />
					<TransactionTypeDelete type={type} />
					<TransactionTypeToggle type={type} />
				</div>
			)}
		</Card>
	);
};

export default TransactionType;
