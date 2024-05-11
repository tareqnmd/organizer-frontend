import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { BudgetCategory } from '@/types/modules/budget/budget-category-types';
import { EditIcon } from 'lucide-react';
import BudgetCategoryForm from './BudgetCategoryForm';

const BudgetCategoryEdit = ({ category }: { category: BudgetCategory }) => {
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
				<BudgetCategoryForm category={category} />
			</DialogContent>
		</Dialog>
	);
};

export default BudgetCategoryEdit;
