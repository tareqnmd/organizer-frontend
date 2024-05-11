import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import BudgetCategoryForm from './BudgetCategoryForm';

const BudgetCategoryAdd = () => {
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button size="sm">Create Category</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Type Create</DialogTitle>
					</DialogHeader>
					<BudgetCategoryForm />
				</DialogContent>
			</Dialog>
		</>
	);
};

export default BudgetCategoryAdd;
