import { CardType } from '@/lib/helper/todo';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

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
			className="relative w-full cursor-grab rounded border p-2 shadow active:cursor-grabbing"
			key={card.id}
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={style}
		>
			{card.title}
		</div>
	);
};

export default BoardListCard;
