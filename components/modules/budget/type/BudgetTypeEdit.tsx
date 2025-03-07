'use client';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { BudgetTypeType } from '@/lib/helper/budget';
import { EditIcon } from 'lucide-react';
import { useState } from 'react';
import BudgetTypeForm from './BudgetTypeForm';

export function BudgetTypeEdit({ type }: { type: BudgetTypeType }) {
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
					<DialogTitle>Edit Type</DialogTitle>
				</DialogHeader>
				<BudgetTypeForm setOpen={setOpen} type={type} />
			</DialogContent>
		</Dialog>
	);
}
