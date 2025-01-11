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
import { useDeleteCardMutation } from '@/store/features/todo/card/api';
import { getBoardState } from '@/store/features/todo/card/slice';
import { Loader, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

const CardDelete = ({ cardId }: { cardId: string }) => {
	const { getBoardCard } = useSelector(getBoardState);
	const card = getBoardCard(cardId);
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [deleteCard, { isLoading, isError, isSuccess, error }] =
		useDeleteCardMutation();
	const deleteHandler = () => {
		deleteCard(cardId);
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
			{card ? (
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
			) : null}
		</Dialog>
	);
};

export default CardDelete;
