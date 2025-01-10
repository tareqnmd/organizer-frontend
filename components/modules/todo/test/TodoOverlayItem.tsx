import { getBoardState } from '@/store/features/todo/card/slice';
import { DragOverlay, UniqueIdentifier } from '@dnd-kit/core';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { Container } from './Container';
import Item from './Item';
import AddCard from './card/AddCard';

function renderSortableItemDragOverlay(id: UniqueIdentifier) {
	return <Item value={id} />;
}

function renderContainerDragOverlay(
	containerId: UniqueIdentifier,
	cards: { [key: string]: string[] },
) {
	return (
		<Container
			id={containerId as string}
			style={{
				height: '100%',
			}}
			shadow
		>
			{cards[containerId].map((item: string) => (
				<Item key={item} value={item} />
			))}
			<AddCard listId={containerId as string} />
		</Container>
	);
}

const TodoOverlayItem = ({ activeId }: { activeId: string }) => {
	const boardState = useSelector(getBoardState);
	const { items, containers, getBoardContainer } = boardState;
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
