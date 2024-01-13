import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Trash } from 'lucide-react';
import { Type } from './TransactionTypes';

const TransactionTypeDelete = ({ type }: { type: Type }) => {
	return (
		<Dialog>
			<DialogTrigger
				asChild
				className="cursor-pointer"
			>
				<Trash size={16} />
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Type Delete</DialogTitle>
				</DialogHeader>
				Do you want to delete the type?
				<DialogFooter>
					<Button>Cancel</Button>
					<Button className="bg-red-900">Delete</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default TransactionTypeDelete;
