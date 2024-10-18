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
		touchAction: 'none',
		zIndex: isDragging ? 50 : 0,
	};
	return (
		<div
			className="border bg-white shadow w-full rounded p-2 relative active:cursor-grabbing cursor-grab"
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
