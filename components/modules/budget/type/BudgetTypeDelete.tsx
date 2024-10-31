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
import { BudgetTypeType } from '@/lib/helper/budget';
import { getError } from '@/lib/utils';
import { useDeleteBudgetTypeMutation } from '@/store/features/budget/type/api';
import { Loader, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
const BudgetTypeDelete = ({ type }: { type: BudgetTypeType }) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [deleteType, { isLoading, isError, isSuccess, error }] =
		useDeleteBudgetTypeMutation();
	const deleteHandler = () => {
		deleteType(type.id);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(`Type successfully deleted`);
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
					<DialogTitle>Delete Type ({type.name})</DialogTitle>
				</DialogHeader>
				Do you want to delete the type?
				<DialogFooter>
					<Button
						onClick={deleteHandler}
						className="flex items-center gap-1 bg-status-danger"
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

export default BudgetTypeDelete;
