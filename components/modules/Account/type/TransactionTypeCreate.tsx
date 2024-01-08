import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import TransactionTypeForm from './TransactionTypeForm';

export function TransactionTypeCreate() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="cursor-pointer bg-black text-sm px-3 py-1 text-white border rounded flex items-center gap-1">
					Create Type
				</div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Type Create</DialogTitle>
				</DialogHeader>
				<TransactionTypeForm />
			</DialogContent>
		</Dialog>
	);
}
