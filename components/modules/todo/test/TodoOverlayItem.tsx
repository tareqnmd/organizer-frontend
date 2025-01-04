import { CardType } from '@/lib/helper/todo';
import { DragOverlay, UniqueIdentifier } from '@dnd-kit/core';
import { createPortal } from 'react-dom';
import { Container } from './Container';
import { Item } from './Item';

function renderSortableItemDragOverlay(id: UniqueIdentifier) {
	return <Item value={id} dragOverlay />;
}

function renderContainerDragOverlay(
	containerId: string,
	items: { [key: string]: CardType[] },
) {
	return (
		<Container
			label={`Container ${containerId}`}
			style={{
				height: '100%',
			}}
			shadow
		>
			{items[containerId] &&
				items[containerId].map((item: CardType) => (
					<Item key={item.id} value={item.id} dragOverlay />
				))}
		</Container>
	);
}

const TodoOverlayItem = ({
	activeId,
	containers,
	items,
}: {
	activeId: string;
	containers: string[];
	items: { [key: string]: CardType[] };
}) => {
	return createPortal(
		<DragOverlay adjustScale={false}>
			{activeId
				? containers.includes(activeId)
					? renderContainerDragOverlay(activeId, items)
					: renderSortableItemDragOverlay(activeId)
				: null}
		</DragOverlay>,
		document.body,
	);
};

export default TodoOverlayItem;
