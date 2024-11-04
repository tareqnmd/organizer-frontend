'use client';

import DnDContextLayout from '@/components/layout/DnDContextLayout';
import { CardType, ListType } from '@/lib/helper/todo';
import { DragEndEvent, DragOverEvent } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { useState } from 'react';
import BoardListForm from '../list/BoardListForm';

const BoardDnDContent = ({
	boardId,
	lists,
	cards,
}: {
	boardId: string;
	lists: ListType[];
	cards: CardType[];
}) => {
	const [listWithCards, setListWithCards] = useState<ListType[]>(lists);
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
							<div key={list.id}>{list.title}</div>
						))}
					</SortableContext>
					<div>
						<BoardListForm
							boardId={boardId}
							setLists={setListWithCards}
						/>
					</div>
				</div>
			</DnDContextLayout>
		</div>
	);
};

export default BoardDnDContent;
