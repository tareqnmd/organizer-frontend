import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { BadgeCheck, BadgeMinus } from 'lucide-react';
import { Type } from './TransactionTypes';

const TransactionTypeToggle = ({ type }: { type: Type }) => {
	return (
		<Dialog>
			<DialogTrigger
				asChild
				className="cursor-pointer"
			>
				{type.status === 1 ? (
					<BadgeCheck size={16} />
				) : (
					<BadgeMinus size={16} />
				)}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>
						Type {type.status === 0 ? 'Active' : 'Inactive'}
					</DialogTitle>
				</DialogHeader>
				Do you want to {type.status === 0 ? 'active' : 'inactive'} the type?
				<DialogFooter>
					<Button>Cancel</Button>
					<Button
						className={cn(type.status === 0 ? 'bg-green-500' : 'bg-red-900')}
					>
						{type.status === 0 ? 'Active' : 'Inactive'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default TransactionTypeToggle;
