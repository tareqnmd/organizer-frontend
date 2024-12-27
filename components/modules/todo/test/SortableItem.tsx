import { useEffect } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { useState } from 'react';
import { Item } from './Item';

function SortableItem({ id, index, containerId, getIndex }: any) {
	const {
		setNodeRef,
		setActivatorNodeRef,
		listeners,
		isDragging,
		isSorting,
		over,
		overIndex,
		transform,
		transition,
	} = useSortable({
		id,
	});
	function useMountStatus() {
		const [isMounted, setIsMounted] = useState(false);

		useEffect(() => {
			const timeout = setTimeout(() => setIsMounted(true), 500);

			return () => clearTimeout(timeout);
		}, []);

		return isMounted;
	}

	const mounted = useMountStatus();
	const mountedWhileDragging = isDragging && !mounted;

	return (
		<Item
			ref={setNodeRef}
			value={id}
			dragging={isDragging}
			sorting={isSorting}
			handleProps={{ ref: setActivatorNodeRef }}
			index={index}
			transition={transition}
			transform={transform}
			fadeIn={mountedWhileDragging}
			listeners={listeners}
		/>
	);
}

export default SortableItem;
