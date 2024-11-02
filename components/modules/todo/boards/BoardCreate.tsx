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
import BoardForm from './BoardForm';

const BoardCreate = ({ workspaceId }: { workspaceId?: string }) => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className="ml-auto w-max" asChild>
				<Button size="sm">Create Board</Button>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Create Board</DialogTitle>
				</DialogHeader>
				<BoardForm workspaceId={workspaceId} setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	);
};

export default BoardCreate;
