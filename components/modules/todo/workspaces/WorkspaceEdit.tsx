'use client';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { WorkspaceType } from '@/lib/helper/todo';
import { Edit } from 'lucide-react';
import { useState } from 'react';
import WorkspaceForm from './WorkspaceForm';

const WorkspaceEdit = ({ workspace }: { workspace: WorkspaceType }) => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Edit
					className="cursor-pointer transition-all active:scale-75"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Create Workspace</DialogTitle>
				</DialogHeader>
				<WorkspaceForm setOpen={setOpen} workspace={workspace} />
			</DialogContent>
		</Dialog>
	);
};

export default WorkspaceEdit;
