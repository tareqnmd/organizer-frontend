import { useSortable } from '@dnd-kit/sortable';
import Item from './CardItem';

function SortableCardItem({ id, index }: { id: string; index: number }) {
	const {
		setNodeRef,
		setActivatorNodeRef,
		listeners,
		isDragging,
		transform,
		transition,
	} = useSortable({
		id,
	});

	return (
		<Item
			ref={setNodeRef}
			value={id}
			dragging={isDragging}
			handleProps={{ ref: setActivatorNodeRef }}
			index={index}
			transition={transition}
			transform={transform}
			listeners={listeners}
		/>
	);
}

export default SortableCardItem;
