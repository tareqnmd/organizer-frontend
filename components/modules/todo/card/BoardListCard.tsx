import { CardType } from '@/lib/helper/todo';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import BoardListCardDelete from './BoardListCardDelete';
import BorderListCardDetailsModal from './BorderListCardDetailsModal';

const BoardListCard = ({ card }: { card: CardType }) => {
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

	return (
		<div
			className="relative flex w-full cursor-grab items-center justify-between rounded border p-2 shadow active:cursor-grabbing"
			key={card.id}
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={style}
		>
			<BorderListCardDetailsModal card={card} />
			<BoardListCardDelete card={card} />
		</div>
	);
};

export default BoardListCard;
