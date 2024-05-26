'use client';
import ErrorMessage from '@/components/common/message/ErrorMessage';
import SuccessMessage from '@/components/common/message/SuccessMessage';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { getError } from '@/lib/helper/common';
import { useDeleteBudgetCategoryMutation } from '@/store/features/budget/category/api';
import { BudgetCategoryType } from '@/types/modules/budget/budget-category-types';
import { Loader, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const BudgetCategoryDelete = ({
	category,
}: {
	category: BudgetCategoryType;
}) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [deleteCategory, { isLoading, isError, isSuccess, error }] =
		useDeleteBudgetCategoryMutation();

	const deleteHandler = () => {
		deleteCategory(category.id);
	};

	useEffect(() => {
		if (isError || isSuccess) {
			toast(
				isError ? (
					<ErrorMessage message={getError(error)} />
				) : (
					<SuccessMessage message={`Category successfully deleted`} />
				)
			);
			setOpen(false);
			router.refresh();
		}
	}, [error, isError, isSuccess, router]);
	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				<Trash
					className="cursor-pointer"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Delete Category ({category.name})</DialogTitle>
				</DialogHeader>
				Do you want to delete the Category?
				<DialogFooter>
					<Button
						onClick={deleteHandler}
						className="bg-red-900 flex items-center gap-1"
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader
								className="animate-spin"
								size={16}
							/>
						) : null}
						Delete
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default BudgetCategoryDelete;
