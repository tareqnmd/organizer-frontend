'use client';

import DnDContextLayout from '@/components/layout/DnDContextLayout';
import { CardType, ListType } from '@/lib/helper/todo';
import { DragEndEvent, DragOverEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { useState } from 'react';
import BoardList from '../list/BoardList';
import BoardListForm from '../list/BoardListForm';

const BoardDnDContent = ({
	boardId,
	lists: listItems,
	cards: cardItems,
}: {
	boardId: string;
	lists: ListType[];
	cards: CardType[];
}) => {
	const [lists, setLists] = useState(listItems);
	const [cards, setCards] = useState(cardItems);

	const onDragEnd = (event: DragEndEvent) => {
		try {
			const { active, over } = event;
			if (!over) return;

			const activeId = active.id;
			const overId = over.id;

			if (activeId === overId) return;

			const isActiveAColumn = active.data.current?.type === 'List';
			if (!isActiveAColumn) return;
			setLists((lists: any) => {
				const activeColumnIndex = lists.findIndex(
					(list: any) => list.id === activeId,
				);
				const overColumnIndex = lists.findIndex(
					(list: any) => list.id === overId,
				);

				return arrayMove(lists, activeColumnIndex, overColumnIndex);
			});
		} catch (e: any) {
			console.log('e', e);
		}
	};

	function onDragOver(event: DragOverEvent) {
		try {
			const { active, over } = event;
			if (!over) return;

			const activeId = active.id;
			const overId = over.id;

			if (activeId === overId) return;

			const isActiveATask = active.data.current?.type === 'Card';
			const isOverATask = over.data.current?.type === 'Card';

			if (!isActiveATask) return;

			if (isActiveATask && isOverATask) {
				setCards((cards: any) => {
					const activeIndex = cards.findIndex(
						(card: any) => card.id === activeId,
					);
					const overIndex = cards.findIndex(
						(card: any) => card.id === overId,
					);
					if (cards[activeIndex].listId !== cards[overIndex].listId) {
						cards[activeIndex].listId = cards[overIndex].listId;
						return arrayMove(cards, activeIndex, overIndex - 1);
					}
					return arrayMove(cards, activeIndex, overIndex);
				});
			}

			const isOverAColumn = over.data.current?.type === 'List';

			if (isActiveATask && isOverAColumn) {
				setCards((cards: any) => {
					const activeIndex = cards.findIndex(
						(card: any) => card.id === activeId,
					);
					if (cards[activeIndex]?.listId) {
						cards[activeIndex].listId = overId;
					}
					return arrayMove(cards, activeIndex, activeIndex);
				});
			}
		} catch (e: any) {
			console.log('e', e);
		}
	}

	return (
		<div className="z-10 h-full w-full overflow-x-auto">
			<DnDContextLayout
				handleDragOver={onDragOver}
				handleDragEnd={onDragEnd}
			>
				<div className="flex w-max gap-2 text-light-text">
					<SortableContext items={lists}>
						{lists?.map((list: any) => (
							<BoardList
								key={list.id}
								list={list}
								listCards={cards.filter(
									(card: any) => card.listId === list.id,
								)}
								setCards={setCards}
							/>
						))}
					</SortableContext>
					<div>
						<BoardListForm boardId={boardId} setLists={setLists} />
					</div>
				</div>
			</DnDContextLayout>
		</div>
	);
};

export default BoardDnDContent;
