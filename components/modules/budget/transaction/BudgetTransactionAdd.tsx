'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import BudgetTransactionForm from './BudgetTransactionForm';

const BudgetTransactionAdd = () => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="col-span-2 h-8 px-1 text-xs max-md:col-start-3 md:col-span-1 md:px-4 md:text-sm">
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
