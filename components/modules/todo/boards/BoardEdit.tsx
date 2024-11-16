'use client';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { BoardType } from '@/lib/helper/todo';
import { Edit } from 'lucide-react';
import { useState } from 'react';
import BoardForm from './BoardForm';

const BoardEdit = ({ board }: { board: BoardType }) => {
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
					<DialogTitle>
						{`${board?.id ? 'Edit' : 'Create'} Board`}
					</DialogTitle>
				</DialogHeader>
				<BoardForm setOpen={setOpen} board={board} />
			</DialogContent>
		</Dialog>
	);
};

export default BoardEdit;
