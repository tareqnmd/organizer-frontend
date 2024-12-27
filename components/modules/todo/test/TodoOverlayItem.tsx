import { DragOverlay, UniqueIdentifier } from '@dnd-kit/core';
import { createPortal } from 'react-dom';
import { Container } from './Container';
import { Item } from './Item';

function renderSortableItemDragOverlay(id: UniqueIdentifier) {
	return <Item value={id} dragOverlay />;
}

function renderContainerDragOverlay(
	containerId: UniqueIdentifier,
	cards: { [key: string]: string[] },
) {
	return (
		<Container
			label={`Container ${containerId}`}
			style={{
				height: '100%',
			}}
			shadow
		>
			{cards[containerId].map((item: any) => (
				<Item key={item} value={item} />
			))}
		</Container>
	);
}

const TodoOverlayItem = ({
	activeId,
	lists,
	cards,
}: {
	activeId: string;
	lists: string[];
	cards: { [key: string]: string[] };
}) => {
	return createPortal(
		<DragOverlay adjustScale={false}>
			{activeId
				? lists.includes(activeId)
					? renderContainerDragOverlay(activeId, cards)
					: renderSortableItemDragOverlay(activeId)
				: null}
		</DragOverlay>,
		document.body,
	);
};

export default TodoOverlayItem;
