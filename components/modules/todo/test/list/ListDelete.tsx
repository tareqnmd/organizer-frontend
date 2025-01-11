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
import { getError } from '@/lib/utils';
import {
	getBoardState,
	updateFullBoard,
} from '@/store/features/todo/board/slice';
import { useDeleteListMutation } from '@/store/features/todo/list/api';
import { useAppDispatch } from '@/store/hooks';
import { Loader, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

const ListDelete = ({ listId }: { listId: string }) => {
	const dispatch = useAppDispatch();
	const { getBoardContainer } = useSelector(getBoardState);
	const list = getBoardContainer(listId);

	const [open, setOpen] = useState(false);
	const [deleteList, { isLoading, isError, isSuccess, error }] =
		useDeleteListMutation();
	const deleteHandler = async () => {
		await deleteList(listId);
		dispatch(updateFullBoard({ deleteList: { id: listId } }));
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(`List successfully deleted`);
			setOpen(false);
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [error, isError, isSuccess]);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Trash
					className="cursor-pointer transition-all active:scale-75"
					size={16}
				/>
			</DialogTrigger>
			{list ? (
				<DialogContent className="basic-modal">
					<DialogHeader>
						<DialogTitle>Delete List ({list.title})</DialogTitle>
					</DialogHeader>
					Do you want to delete the list?
					<DialogFooter>
						<Button
							onClick={deleteHandler}
							className="flex items-center gap-1 bg-status-danger"
							disabled={isLoading}
						>
							{isLoading ? (
								<Loader className="animate-spin" size={16} />
							) : null}
							Delete
						</Button>
					</DialogFooter>
				</DialogContent>
			) : null}
		</Dialog>
	);
};

export default ListDelete;
