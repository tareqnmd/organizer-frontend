import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { EditIcon } from 'lucide-react';
import TransactionTypeForm from './TransactionTypeForm';

export function TransactionTypeCreate() {
	return (
		<Dialog>
			<DialogTrigger
				asChild
				className="cursor-pointer"
			>
				<EditIcon size={16} />
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Type Update</DialogTitle>
				</DialogHeader>
				<TransactionTypeForm />
			</DialogContent>
		</Dialog>
	);
}
