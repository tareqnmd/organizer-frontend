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
import { getError } from '@/lib/common-func';
import { cn } from '@/lib/utils';
import { useEditBudgetCategoryMutation } from '@/store/features/budget/category/api';
import { BudgetCategory } from '@/types/modules/budget/budget-category-types';
import { BadgeCheck, BadgeMinus, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
const BudgetCategoryStatus = ({ category }: { category: BudgetCategory }) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [statusToggle, { isLoading, isError, isSuccess, error }] =
		useEditBudgetCategoryMutation();
	const statusHandler = () => {
		statusToggle({
			id: category.id,
			data: { status: category.status === 1 ? 0 : 1 },
		});
	};

	useEffect(() => {
		if (isError || isSuccess) {
			toast(
				isError ? (
					<ErrorMessage message={getError(error)} />
				) : (
					<SuccessMessage
						message={`Category successfully ${
							category.status === 1 ? 'inactivated' : 'activated'
						}`}
					/>
				)
			);
			router.refresh();
			setOpen(false);
		}
	}, [category.status, error, isError, isSuccess, router]);
	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				{category.status === 0 ? (
					<BadgeCheck
						className="cursor-pointer"
						size={16}
					/>
				) : (
					<BadgeMinus
						className="cursor-pointer"
						size={16}
					/>
				)}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>
						{category.status === 0 ? 'Active' : 'Inactive'} Category (
						{category.name})
					</DialogTitle>
				</DialogHeader>
				Do you want to {category.status === 0 ? 'active' : 'inactive'} the
				Category?
				<DialogFooter>
					<Button
						onClick={statusHandler}
						className={cn(
							'flex items-center gap-1',
							category.status === 0 ? 'bg-green-500' : 'bg-red-900'
						)}
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader
								className="animate-spin"
								size={16}
							/>
						) : null}
						{category.status === 0 ? 'Active' : 'Inactive'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default BudgetCategoryStatus;
