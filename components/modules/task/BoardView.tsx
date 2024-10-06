'use client';

import DnDContextLayout from '@/components/layout/DnDContextLayout';
import { TASK_DATA } from '@/lib/task-data';
import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { useState } from 'react';
import BoardList from './BoardList';

const BoardView = () => {
	const [lists, setLists] = useState(TASK_DATA);
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
		<div className="w-full overflow-x-auto h-full">
			<DnDContextLayout
				handleDragStart={onDragStart}
				handleDragEnd={onDragEnd}
			>
				<SortableContext items={lists}>
					<div className="flex gap-2 items-start w-max">
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
			</DnDContextLayout>
		</div>
	);
};

export default BoardView;
