'use client';
import {
	createRange,
	findContainer,
	multipleCoordinateGetter,
} from '@/lib/helper/todo/helper';
import {
	closestCenter,
	DndContext,
	getFirstCollision,
	KeyboardSensor,
	MeasuringStrategy,
	MouseSensor,
	pointerWithin,
	rectIntersection,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useCallback, useEffect, useRef, useState } from 'react';
import TodoOverlayItem from './TodoOverlayItem';
import TodoSortableArea from './TodoSortableArea';

const TestTodo = ({ lists, cards }: any) => {
	const [items, setItems] = useState<any>({
		A: createRange(3, (index: any) => `A${index + 1}`),
		B: createRange(3, (index: any) => `B${index + 1}`),
		C: createRange(3, (index: any) => `C${index + 1}`),
	});
	console.log(lists, cards);
	const [containers, setContainers] = useState(Object.keys(items) as any);
	const [activeId, setActiveId] = useState<any>(null);
	const lastOverId = useRef<any>(null);
	const recentlyMovedToNewContainer = useRef(false);

	const collisionDetectionStrategy: any = useCallback(
		(args: any) => {
			if (activeId && activeId in items) {
				return closestCenter({
					...args,
					droppableContainers: args.droppableContainers.filter(
						(container: any) => container.id in items,
					),
				});
			}

			const pointerIntersections = pointerWithin(args);
			const intersections =
				pointerIntersections.length > 0
					? pointerIntersections
					: rectIntersection(args);
			let overId = getFirstCollision(intersections, 'id');

			if (overId != null) {
				if (overId in items) {
					const containerItems = items[overId];
					if (containerItems.length > 0) {
						overId = closestCenter({
							...args,
							droppableContainers:
								args.droppableContainers.filter(
									(container: any) =>
										container.id !== overId &&
										containerItems.includes(container.id),
								),
						})[0]?.id;
					}
				}
				lastOverId.current = overId;
				return [{ id: overId }];
			}
			if (recentlyMovedToNewContainer.current) {
				lastOverId.current = activeId;
			}
			return lastOverId.current ? [{ id: lastOverId.current }] : [];
		},
		[activeId, items],
	);

	const [clonedItems, setClonedItems] = useState<any>(null);
	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: multipleCoordinateGetter,
		}),
	);

	const onDragCancel = () => {
		if (clonedItems) {
			setItems(clonedItems);
		}
		setActiveId(null);
		setClonedItems(null);
	};

	useEffect(() => {
		requestAnimationFrame(() => {
			recentlyMovedToNewContainer.current = false;
		});
	}, [items]);

	function handleRemove(containerID: any) {
		setContainers((containers: any) =>
			containers.filter((id: any) => id !== containerID),
		);
	}

	const onDragOver = ({ active, over }: any) => {
		const overId = over?.id;
		if (overId == null || active.id in items) {
			return;
		}
		const overContainer = findContainer(overId, items);
		const activeContainer = findContainer(active.id, items);
		if (!overContainer || !activeContainer) {
			return;
		}
		if (activeContainer !== overContainer) {
			setItems((items: any) => {
				const activeItems = items[activeContainer];
				const overItems = items[overContainer];
				const overIndex = overItems.indexOf(overId);
				const activeIndex = activeItems.indexOf(active.id);
				let newIndex: number;
				if (overId in items) {
					newIndex = overItems.length + 1;
				} else {
					const isBelowOverItem =
						over &&
						active.rect.current.translated &&
						active.rect.current.translated.top >
							over.rect.top + over.rect.height;

					const modifier = isBelowOverItem ? 1 : 0;
					newIndex =
						overIndex >= 0
							? overIndex + modifier
							: overItems.length + 1;
				}
				recentlyMovedToNewContainer.current = true;
				return {
					...items,
					[activeContainer]: items[activeContainer].filter(
						(item: any) => item !== active.id,
					),
					[overContainer]: [
						...items[overContainer].slice(0, newIndex),
						items[activeContainer][activeIndex],
						...items[overContainer].slice(
							newIndex,
							items[overContainer].length,
						),
					],
				};
			});
		}
	};

	const onDragEnd = ({ active, over }: any) => {
		if (active.id in items && over?.id) {
			setContainers((containers: any) => {
				const activeIndex = containers.indexOf(active.id);
				const overIndex = containers.indexOf(over.id);
				return arrayMove(containers, activeIndex, overIndex);
			});
		}
		const activeContainer = findContainer(active.id, items);
		if (!activeContainer) {
			setActiveId(null);
			return;
		}
		const overId = over?.id;
		if (overId == null) {
			setActiveId(null);
			return;
		}
		const overContainer = findContainer(overId, items);
		if (overContainer) {
			const activeIndex = items[activeContainer].indexOf(active.id);
			const overIndex = items[overContainer].indexOf(overId);
			if (activeIndex !== overIndex) {
				setItems((items: any) => ({
					...items,
					[overContainer]: arrayMove(
						items[overContainer],
						activeIndex,
						overIndex,
					),
				}));
			}
		}
		setActiveId(null);
	};

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={collisionDetectionStrategy}
			measuring={{
				droppable: {
					strategy: MeasuringStrategy.Always,
				},
			}}
			onDragStart={({ active }) => {
				setActiveId(active.id);
				setClonedItems(items);
			}}
			onDragOver={onDragOver}
			onDragEnd={onDragEnd}
			onDragCancel={onDragCancel}
		>
			<TodoSortableArea
				lists={containers}
				items={items}
				handleRemove={handleRemove}
			/>
			<TodoOverlayItem
				activeId={activeId}
				lists={containers}
				cards={items}
			/>
		</DndContext>
	);
};

export default TestTodo;
