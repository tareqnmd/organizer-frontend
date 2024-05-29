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
import { cn } from '@/lib/utils';
import { BadgeCheck, BadgeMinus, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { useEditBudgetTransactionMutation } from '@/store/features/budget/transaction/api';
import { BudgetTransactionType } from '@/types/modules/budget/budget-transaction-types';

const BudgetTransactionStatus = ({
	transaction,
}: {
	transaction: BudgetTransactionType;
}) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [statusToggle, { isLoading, isError, isSuccess, error, data = {} }] =
		useEditBudgetTransactionMutation();
	const statusHandler = () => {
		statusToggle({
			id: transaction.id,
			data: { status: transaction.status === 1 ? 0 : 1 },
		});
	};

	useEffect(() => {
		if (isError || isSuccess) {
			toast(
				isError ? (
					<ErrorMessage message={getError(error)} />
				) : (
					<SuccessMessage
						message={`Transaction successfully ${
							data.status === 1 ? 'inactivated' : 'activated'
						}`}
					/>
				)
			);
			router.refresh();
			setOpen(false);
		}
	}, [data.status, error, isError, isSuccess, router]);
	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				{transaction.status === 0 ? (
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
						{transaction.status === 0 ? 'Active' : 'Inactive'} Transaction (
						{transaction.description})
					</DialogTitle>
				</DialogHeader>
				Do you want to {transaction.status === 0 ? 'active' : 'inactive'} the
				Transaction?
				<DialogFooter>
					<Button
						onClick={statusHandler}
						className={cn(
							'flex items-center gap-1',
							transaction.status === 0 ? 'bg-green-500' : 'bg-red-900'
						)}
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader
								className="animate-spin"
								size={16}
							/>
						) : null}
						{transaction.status === 0 ? 'Active' : 'Inactive'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default BudgetTransactionStatus;
