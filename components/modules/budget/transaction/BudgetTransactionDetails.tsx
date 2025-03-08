'use client';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { BudgetTransactionType } from '@/lib/helper/budget';
import { format, formatDate } from 'date-fns';
import { Eye } from 'lucide-react';
const BudgetTransactionDetails = ({
	transaction,
}: {
	transaction: BudgetTransactionType;
}) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Eye
					className="cursor-pointer transition-all active:scale-75"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Transaction Details</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-0.5">
						<strong className="text-sm font-medium">
							Category :
						</strong>
						<span className="text-sm">
							{transaction.categoryName}
						</span>
					</div>
					<div className="flex items-center gap-0.5">
						<strong className="text-sm font-medium">Type :</strong>
						<span className="text-sm">{transaction.typeName}</span>
					</div>
					<div className="flex items-center gap-0.5">
						<strong className="text-sm font-medium">
							Amount :
						</strong>
						<span className="text-sm">{transaction.amount}</span>
					</div>
					<div className="flex items-center gap-0.5">
						<strong className="text-sm font-medium">Date :</strong>
						<span className="text-sm">
							{format(transaction.date, 'dd-MM-yyyy')}
						</span>
					</div>
					<div className="flex flex-col gap-0.5">
						<strong className="text-sm font-medium">
							Description :
						</strong>
						<span className="text-sm">
							{transaction.description}
						</span>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default BudgetTransactionDetails;
