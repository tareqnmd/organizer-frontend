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
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useState } from 'react';
import BoardList from './BoardList';

const BoardView = () => {
	const [lists, setLists] = useState(START_DATA);
	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;
		if (active.id === over?.id) {
			return;
		}
		setLists((lists) => {
			const itemOriginalPos = lists.findIndex((item) => item.id === active.id);
			const itemNewPos = lists.findIndex((item) => item.id === over?.id);
			return arrayMove(lists, itemOriginalPos, itemNewPos);
		});
	}
	return (
		<div className="w-full overflow-x-auto border">
			<DnDContextLayout handleDragEnd={handleDragEnd}>
				<div className="flex gap-4 w-max">
					{lists.map((list: any) => (
						<BoardList
							key={list.id}
							list={list}
						/>
					))}
				</div>
			</DnDContextLayout>
		</div>
	);
};

export default BoardView;
