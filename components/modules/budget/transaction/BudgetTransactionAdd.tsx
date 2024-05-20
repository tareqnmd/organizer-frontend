'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import BudgetTransactionForm from './BudgetTransactionForm';

const BudgetTransactionAdd = () => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				<Button className="h-8 px-1 md:px-4 text-xs md:text-sm">
					<span className="hidden md:block">Create Category</span>
					<span className="block md:hidden">
						<PlusIcon />
					</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create Category</DialogTitle>
				</DialogHeader>
				<BudgetTransactionForm setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	);
};

export default BudgetTransactionAdd;
