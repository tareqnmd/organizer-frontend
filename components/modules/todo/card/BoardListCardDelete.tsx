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
import { CardType } from '@/lib/helper/todo';
import { getError } from '@/lib/utils';
import { useDeleteCardMutation } from '@/store/features/todo/card/api';
import { Loader, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
const BoardListCardDelete = ({ card }: { card: CardType }) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [deleteCard, { isLoading, isError, isSuccess, error }] =
		useDeleteCardMutation();
	const deleteHandler = () => {
		deleteCard(card.id);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(`Card successfully deleted`);
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
					className="shrink-0 cursor-pointer transition-all active:scale-75"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Delete Card ({card.title})</DialogTitle>
				</DialogHeader>
				Do you want to delete the card?
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

export default BoardListCardDelete;
