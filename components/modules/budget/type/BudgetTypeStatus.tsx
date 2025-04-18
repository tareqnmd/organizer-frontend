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
import { cn, getError } from '@/lib/utils';
import { useEditBudgetTypeMutation } from '@/store/features/budget/type/api';
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
				`Type successfully ${data.status === 1 ? 'inactivated' : 'activated'}`,
			);
			setOpen(false);
			router.refresh();
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [data.status, error, isError, isSuccess, router]);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				{type.status === 0 ? (
					<BadgeCheck
						className="cursor-pointer transition-all active:scale-75"
						size={16}
					/>
				) : (
					<BadgeMinus
						className="cursor-pointer transition-all active:scale-75"
						size={16}
					/>
				)}
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>
						{type.status === 0 ? 'Active' : 'Inactive'} Type (
						{type.name})
					</DialogTitle>
				</DialogHeader>
				Do you want to {type.status === 0 ? 'active' : 'inactive'} the
				Type?
				<DialogFooter>
					<Button
						onClick={statusHandler}
						className={cn(
							'flex items-center gap-1',
							type.status === 0
								? 'bg-status-success'
								: 'bg-red-900',
						)}
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader className="animate-spin" size={16} />
						) : null}
						{type.status === 0 ? 'Active' : 'Inactive'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default BudgetTypeStatus;
