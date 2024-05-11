import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { BudgetCategory } from '@/types/modules/budget/budget-category-types';
import { BadgeCheck, BadgeMinus } from 'lucide-react';
const BudgetCategoryStatus = ({ category }: { category: BudgetCategory }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				{category.status === 1 ? (
					<BadgeCheck
						className="cursor-pointer"
						size={16}
					/>
				) : (
					<BadgeMinus
						className="cursor-pointer"
						size={16}
					/>
				)}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>
						{category.status === 0 ? 'Active' : 'Inactive'} Category (
						{category.name})
					</DialogTitle>
				</DialogHeader>
				Do you want to {category.status === 0 ? 'active' : 'inactive'} the
				Category?
				<DialogFooter>
					<Button
						className={cn(
							category.status === 0 ? 'bg-green-500' : 'bg-red-900'
						)}
					>
						{category.status === 0 ? 'Active' : 'Inactive'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default BudgetCategoryStatus;
