'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { BudgetTransactionType } from '@/lib/helper/modules/budget';
import { getError } from '@/lib/utils';
import { useDeleteBudgetTransactionMutation } from '@/store/features/budget/transaction/api';
import { Loader, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
const BudgetTransactionDelete = ({
	transaction,
}: {
	transaction: BudgetTransactionType;
}) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [deleteCategory, { isLoading, isError, isSuccess, error }] =
		useDeleteBudgetTransactionMutation();

	const deleteHandler = () => {
		deleteCategory(transaction.id);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(`Transaction successfully deleted`);
			setOpen(false);
			router.refresh();
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [error, isError, isSuccess, router]);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Trash className="cursor-pointer" size={16} />
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>
						Delete Transaction ({transaction.description})
					</DialogTitle>
				</DialogHeader>
				Do you want to delete the Transaction?
				<DialogFooter>
					<Button
						onClick={deleteHandler}
						className="flex items-center gap-1 bg-red-900"
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader className="animate-spin" size={16} />
						) : null}
						Delete
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default BudgetTransactionDelete;
