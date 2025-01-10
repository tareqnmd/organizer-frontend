'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import BudgetTransactionForm from './BudgetTransactionForm';

const BudgetTransactionAdd = () => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="col-span-3 flex h-8 items-center gap-1 px-1 text-xs md:col-span-2 md:px-4 md:text-sm">
					<Plus className="h-4 w-4 shrink-0" />
					New Transaction
				</Button>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>New Transaction</DialogTitle>
				</DialogHeader>
				<BudgetTransactionForm setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	);
};

export default BudgetTransactionAdd;
