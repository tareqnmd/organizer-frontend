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
import { getError } from '@/lib/helper/common';
import { cn } from '@/lib/utils';
import { useEditBudgetTypeMutation } from '@/store/features/budget/type/api';
import { BudgetTypeType } from '@/types/modules/budget/budget-type-types';
import { BadgeCheck, BadgeMinus, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const BudgetTypeStatus = ({ type }: { type: BudgetTypeType }) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [statusToggle, { isLoading, isError, isSuccess, error, data = {} }] =
		useEditBudgetTypeMutation();
	const statusHandler = () => {
		statusToggle({
			id: type.id,
			data: { status: type.status === 1 ? 0 : 1 },
		});
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(
				`Type successfully ${data.status === 1 ? 'inactivated' : 'activated'}`
			);
			setOpen(false);
			router.refresh();
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [data.status, error, isError, isSuccess, router]);

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				{type.status === 0 ? (
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
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>
						{type.status === 0 ? 'Active' : 'Inactive'} Type ({type.name})
					</DialogTitle>
				</DialogHeader>
				Do you want to {type.status === 0 ? 'active' : 'inactive'} the Type?
				<DialogFooter>
					<Button
						onClick={statusHandler}
						className={cn(
							'flex items-center gap-1',
							type.status === 0 ? 'bg-green-500' : 'bg-red-900'
						)}
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader
								className="animate-spin"
								size={16}
							/>
						) : null}
						{type.status === 0 ? 'Active' : 'Inactive'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default BudgetTypeStatus;
