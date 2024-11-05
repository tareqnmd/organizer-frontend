'use client';

import DnDContextLayout from '@/components/layout/DnDContextLayout';
import { CardType, ListType } from '@/lib/helper/todo';
import { DragEndEvent, DragOverEvent } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
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

	const onDragOver = (event: DragOverEvent) => {
		console.log(event);
	};
	const onDragEnd = (event: DragEndEvent) => {
		console.log(event);
	};
	return (
		<div className="z-10 h-full w-full overflow-x-auto">
			<DnDContextLayout
				handleDragOver={onDragOver}
				handleDragEnd={onDragEnd}
			>
				<div className="flex w-max gap-2">
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
