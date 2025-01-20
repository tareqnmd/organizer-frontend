import { getBoardState } from '@/store/features/todo/board/slice';
import { DragOverlay, UniqueIdentifier } from '@dnd-kit/core';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import AddCard from '../card/AddCard';
import Item from '../card/CardItem';
import { Container } from '../list/Container';

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
			itemsLength={cards[containerId]?.length ?? 0}
		>
			{cards[containerId].map((item: string) => (
				<Item key={item} value={item} />
			))}
			<AddCard listId={containerId as string} />
		</Container>
	);
}

const BoardOverlayItem = ({ activeId }: { activeId: string }) => {
	const boardState = useSelector(getBoardState);
	const { items, containers } = boardState;
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

export default BoardOverlayItem;
