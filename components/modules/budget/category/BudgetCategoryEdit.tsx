'use client';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { BudgetCategoryType } from '@/lib/helper/budget';
import { EditIcon } from 'lucide-react';
import { useState } from 'react';
import BudgetCategoryForm from './BudgetCategoryForm';

const BudgetCategoryEdit = ({ category }: { category: BudgetCategoryType }) => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<EditIcon
					className="cursor-pointer transition-all active:scale-75"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Edit Category</DialogTitle>
				</DialogHeader>
				<BudgetCategoryForm setOpen={setOpen} category={category} />
			</DialogContent>
		</Dialog>
	);
};

export default BudgetCategoryEdit;
