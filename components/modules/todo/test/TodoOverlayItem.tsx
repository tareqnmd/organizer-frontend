import { getBoardState } from '@/store/features/todo/card/slice';
import { DragOverlay, UniqueIdentifier } from '@dnd-kit/core';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
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

const TodoOverlayItem = ({ activeId }: { activeId: string }) => {
	const { items, containers } = useSelector(getBoardState);
	return createPortal(
		<DragOverlay adjustScale={false}>
			{activeId
				? containers?.includes(activeId)
					? renderContainerDragOverlay(activeId, items)
					: renderSortableItemDragOverlay(activeId)
				: null}
		</DragOverlay>,
		document.body,
	);
};

export default TodoOverlayItem;
