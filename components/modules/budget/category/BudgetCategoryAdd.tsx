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
import BudgetCategoryForm from './BudgetCategoryForm';

const BudgetCategoryAdd = () => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				<Button size="sm">Create Category</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create Category</DialogTitle>
				</DialogHeader>
				<BudgetCategoryForm setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	);
};

export default BudgetCategoryAdd;
