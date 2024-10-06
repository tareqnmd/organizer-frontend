import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const BoardListCard = ({ card }: { card: any }) => {
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
	};
	return (
		<div
			className="border w-full rounded p-1 active:cursor-grabbing cursor-grab"
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
