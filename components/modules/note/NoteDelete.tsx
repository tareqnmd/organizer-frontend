'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { getError } from '@/lib/helper/common';
import { useDeleteNoteMutation } from '@/store/features/note/api';
import { NoteType } from '@/types/modules/note/budget-note-types';
import { Loader, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
const NoteDelete = ({ note }: { note: NoteType }) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [deleteNote, { isLoading, isError, isSuccess, error }] =
		useDeleteNoteMutation();
	const deleteHandler = () => {
		deleteNote(note.id);
	};
	useEffect(() => {
		if (isSuccess) {
			toast.success('Type successfully deleted');
			setOpen(false);
			router.refresh();
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [error, isError, isSuccess, router]);
	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				<Trash
					className="cursor-pointer"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Delete Note ({note.subject})</DialogTitle>
				</DialogHeader>
				Do you want to delete the note?
				<DialogFooter>
					<Button
						onClick={deleteHandler}
						className="bg-red-900 flex items-center gap-1"
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader
								className="animate-spin"
								size={16}
							/>
						) : null}
						Delete
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default NoteDelete;
