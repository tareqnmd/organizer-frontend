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
import TimeTrackProjectForm from './TimeTrackProjectForm';

const TimeTrackProjectAdd = () => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className="self-end" asChild>
				<Button className="h-8 px-1 text-xs md:px-4 md:text-sm">
					<span className="hidden md:block">New Project</span>
					<span className="block md:hidden">
						<PlusIcon />
					</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Create Project</DialogTitle>
				</DialogHeader>
				<TimeTrackProjectForm setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	);
};

export default TimeTrackProjectAdd;
