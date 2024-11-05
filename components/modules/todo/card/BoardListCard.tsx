import { CardType } from '@/lib/helper/todo';
import { useDeleteCardMutation } from '@/store/features/todo/card/api';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useEffect } from 'react';
import { toast } from 'sonner';
import BoardListCardDelete from './BoardListCardDelete';

const BoardListCard = ({ card }: { card: CardType }) => {
	const [deleteCard, { isLoading: isDeleting, isSuccess: isDeleted }] =
		useDeleteCardMutation();

	const {
		listeners,
		transform,
		transition,
		attributes,
		setNodeRef,
		isDragging,
	} = useSortable({ id: card.id, data: { type: 'Card', card } });

	const style = {
		transition,
		transformOrigin: 'center',
		transform: CSS.Transform.toString(transform),
		touchAction: 'none',
		zIndex: isDragging ? 50 : 0,
	};

	const handleDelete = () => {
		console.log('delete');
		deleteCard(card.id);
	};

	useEffect(() => {
		if (isDeleted) {
			toast.success('Card deleted successfully');
		}
	}, [isDeleted]);

	return (
		<div
			className="relative flex w-full cursor-grab items-center justify-between rounded border p-2 shadow active:cursor-grabbing"
			key={card.id}
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={style}
		>
			<span>{card.title}</span>
			<BoardListCardDelete card={card} />
		</div>
	);
};

export default BoardListCard;
