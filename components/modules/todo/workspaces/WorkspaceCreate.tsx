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
import WorkspaceForm from './WorkspaceForm';

const WorkspaceCreate = () => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className="ml-auto w-max" asChild>
				<Button size="sm">Create Workspace</Button>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Create Workspace</DialogTitle>
				</DialogHeader>
				<WorkspaceForm setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	);
};

export default WorkspaceCreate;
