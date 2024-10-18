'use client';

import DnDContextLayout from '@/components/layout/DnDContextLayout';
import { getListTaskData, TASK_DATA } from '@/lib/dnd';
import { DragEndEvent, DragOverEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { Check, Plus, X } from 'lucide-react';
import { useState } from 'react';
import BoardList from './BoardList';

const BoardView = () => {
	const { listItems = [], cardItems = [] } = getListTaskData(TASK_DATA as any);

	const [lists, setLists] = useState(listItems);
	const [cards, setCards] = useState(cardItems);

	const [listName, setListName] = useState('');
	const [cardForm, setListForm] = useState(false);

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
					(list: any) => list.id === activeId
				);
				const overColumnIndex = lists.findIndex(
					(list: any) => list.id === overId
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
						(card: any) => card.id === activeId
					);
					const overIndex = cards.findIndex((card: any) => card.id === overId);
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
						(card: any) => card.id === activeId
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

	const addList = () => {
		try {
			setLists((prev: any) => [
				...prev,
				{ id: Math.random().toString(), title: listName },
			]);
			clearList();
		} catch (error) {
			clearList();
		}
	};

	const clearList = () => {
		setListForm(false);
		setListName('');
	};

	return (
		<div className="w-full overflow-x-auto h-full">
			<DnDContextLayout
				handleDragOver={onDragOver}
				handleDragEnd={onDragEnd}
			>
				<div className="flex gap-2 w-max">
					<SortableContext items={lists}>
						{lists?.map((list: any) => (
							<BoardList
								list={list}
								key={list.id}
								listCards={cards.filter((card: any) => card.listId === list.id)}
								setCards={setCards}
							/>
						))}
					</SortableContext>
					<div>
						<div className="w-[280px] border bg-white shadow rounded p-2">
							{!cardForm ? (
								<button
									className="border flex items-center justify-center rounded p-2 gap-2 w-full text-sm"
									onClick={() => setListForm(true)}
								>
									<Plus size={14} />
									Add Card
								</button>
							) : (
								<div className="flex items-center justify-between gap-1">
									<input
										className="p-1 w-full border-b focus-visible:outline-none"
										type="text"
										value={listName}
										autoFocus
										onChange={(e) => setListName(e.target.value)}
									/>
									<button
										className="border p-1.5"
										onClick={addList}
									>
										<Check size={16} />
									</button>
									<button
										className="border p-1.5"
										onClick={clearList}
									>
										<X size={16} />
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</DnDContextLayout>
		</div>
	);
};

export default BoardView;
