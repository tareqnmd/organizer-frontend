import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { BudgetCategory } from '@/types/modules/budget/budget-category-types';
import { Trash } from 'lucide-react';

const BudgetCategoryDelete = ({ category }: { category: BudgetCategory }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Trash
					className="cursor-pointer"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Delete Category ({category.name})</DialogTitle>
				</DialogHeader>
				Do you want to delete the type?
				<DialogFooter>
					<Button className="bg-red-900">Delete</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default BudgetCategoryDelete;
