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
import BudgetTypeForm from './BudgetTypeForm';

export function BudgetTypeAdd() {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="h-8 px-1 text-xs md:px-4 md:text-sm">
					<span className="hidden md:block">New Type</span>
					<span className="block md:hidden">
						<PlusIcon />
					</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Create Type</DialogTitle>
				</DialogHeader>
				<BudgetTypeForm setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	);
}
