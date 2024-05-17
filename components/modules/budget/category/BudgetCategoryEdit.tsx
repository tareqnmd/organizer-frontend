'use client';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { BudgetCategory } from '@/types/modules/budget/budget-category-types';
import { EditIcon } from 'lucide-react';
import { useState } from 'react';
import BudgetCategoryForm from './BudgetCategoryForm';

const BudgetCategoryEdit = ({ category }: { category: BudgetCategory }) => {
	const [modalClose, setModalClose] = useState(false);
	return (
		<Dialog>
			<DialogTrigger asChild>
				<EditIcon
					className="cursor-pointer"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Category</DialogTitle>
				</DialogHeader>
				<BudgetCategoryForm
					setModalClose={setModalClose}
					category={category}
				/>
			</DialogContent>
		</Dialog>
	);
};

export default BudgetCategoryEdit;
