'use client';
const START_DATA = [
	{
		id: 'list_1',
		title: 'List 1',
		cards: [
			{
				id: 'list_1_card_1',
				title: 'List 1 Card 1',
			},
			{
				id: 'list_1_card_2',
				title: 'List 1 Card 2',
			},
		],
	},
	{
		id: 'list_2',
		title: 'List 2',
		cards: [
			{
				id: 'list_2_card_1',
				title: 'List 2 Card 1',
			},
			{
				id: 'list_2_card_2',
				title: 'List 2 Card 2',
			},
		],
	},
	{
		id: 'list_3',
		title: 'List 3',
		cards: [
			{
				id: 'list_3_card_1',
				title: 'List 3 Card 1',
			},
			{
				id: 'list_3_card_2',
				title: 'List 3 Card 2',
			},
		],
	},
	{
		id: 'list_4',
		title: 'List 4',
		cards: [
			{
				id: 'list_4_card_1',
				title: 'List 4 Card 1',
			},
			{
				id: 'list_4_card_2',
				title: 'List 4 Card 2',
			},
		],
	},
	{
		id: 'list_5',
		title: 'List 5',
		cards: [
			{
				id: 'list_5_card_1',
				title: 'List 5 Card 1',
			},
			{
				id: 'list_5_card_2',
				title: 'List 5 Card 2',
			},
		],
	},
];
import DnDContextLayout from '@/components/layout/DnDContextLayout';
import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { useState } from 'react';
import BoardList from './BoardList';

const BoardView = () => {
	const [lists, setLists] = useState(START_DATA);
	const [activeList, setActiveList] = useState(null);
	const [activeTask, setActiveTask] = useState(null);

	function onDragStart(event: DragStartEvent) {
		const current: any = event?.active?.data?.current ?? '';
		const type = event?.active?.data?.current?.type ?? '';
		if (type === 'List') {
			setActiveList(current?.list ?? {});
			return;
		} else if (type === 'Card') {
			setActiveTask(current?.card ?? {});
			return;
		}
	}

	const onDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		const activeId = String(active.id);
		const overId = over ? String(over.id) : null;
		const type = active.data.current?.type;
		if (activeId === overId) {
			return;
		}
		if (type === 'List') {
			setLists((users) => {
				const itemOriginalPos = users.findIndex(
					(item) => item.id === active.id
				);
				const itemNewPos = users.findIndex((item) => item.id === over?.id);
				return arrayMove(users, itemOriginalPos, itemNewPos);
			});
		} else if (type === 'Card') {
		}
	};

	return (
		<div className="w-full overflow-x-auto">
			<DnDContextLayout handleDragEnd={onDragEnd}>
				<div className="flex gap-4 w-max">
					<SortableContext
						id={'d'}
						items={lists}
					>
						<div className="flex gap-2 shadow">
							<SortableContext items={lists}>
								{lists.map((list: any) => (
									<BoardList
										list={list}
										key={list.id}
									/>
								))}
							</SortableContext>
						</div>
					</SortableContext>
				</div>
			</DnDContextLayout>
		</div>
	);
};

export default BoardView;
