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
import { ListType } from '@/lib/helper/todo';
import { getError } from '@/lib/utils';
import { useDeleteListMutation } from '@/store/features/todo/list/api';
import { Loader, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
const BoardListDelete = ({ list }: { list: ListType }) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [deleteList, { isLoading, isError, isSuccess, error }] =
		useDeleteListMutation();
	const deleteHandler = () => {
		deleteList(list.id);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(`List successfully deleted`);
			setOpen(false);
			router.refresh();
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [error, isError, isSuccess, router]);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Trash
					className="cursor-pointer transition-all active:scale-75"
					size={16}
				/>
			</DialogTrigger>
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
		</Dialog>
	);
};

export default BoardListDelete;
