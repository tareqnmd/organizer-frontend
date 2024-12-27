'use client';
import {
	DndContext,
	DragOverlay,
	MeasuringStrategy,
	rectIntersection,
} from '@dnd-kit/core';

import {
	closestCenter,
	getFirstCollision,
	KeyboardSensor,
	MouseSensor,
	pointerWithin,
	TouchSensor,
	UniqueIdentifier,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { useCallback, useEffect, useRef } from 'react';

import {
	createRange,
	multipleCoordinateGetter,
} from '@/lib/helper/todo/helper';
import {
	arrayMove,
	horizontalListSortingStrategy,
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Container } from './Container';
import DroppableContainer from './DroppableContainer';
import { Item } from './Item';
import SortableItem from './SortableItem';

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

			// Start by finding any intersecting droppable
			const pointerIntersections = pointerWithin(args);
			const intersections =
				pointerIntersections.length > 0
					? // If there are droppables intersecting with the pointer, return those
						pointerIntersections
					: rectIntersection(args);
			let overId = getFirstCollision(intersections, 'id');

			if (overId != null) {
				if (overId in items) {
					const containerItems = items[overId];

					// If a container is matched and it contains items (columns 'A', 'B', 'C')
					if (containerItems.length > 0) {
						// Return the closest droppable within that container
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

			// When a draggable item moves to a new container, the layout may shift
			// and the `overId` may become `null`. We manually set the cached `lastOverId`
			// to the id of the draggable item that was moved to the new container, otherwise
			// the previous `overId` will be returned which can cause items to incorrectly shift positions
			if (recentlyMovedToNewContainer.current) {
				lastOverId.current = activeId;
			}

			// If no droppable is matched, return the last match
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
	const findContainer = (id: any) => {
		if (id in items) {
			return id;
		}
		return Object.keys(items).find((key) => items[key].includes(id));
	};

	const getIndex = (id: UniqueIdentifier) => {
		const container = findContainer(id);
		if (!container) {
			return -1;
		}
		const index = items[container].indexOf(id);
		return index;
	};

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

	function renderSortableItemDragOverlay(id: UniqueIdentifier) {
		return <Item value={id} dragOverlay />;
	}

	function renderContainerDragOverlay(containerId: UniqueIdentifier) {
		return (
			<Container
				label={`Container ${containerId}`}
				style={{
					height: '100%',
				}}
				shadow
			>
				{items[containerId].map((item: any) => (
					<Item key={item} value={item} />
				))}
			</Container>
		);
	}

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
			onDragOver={({ active, over }) => {
				const overId = over?.id;

				if (overId == null || active.id in items) {
					return;
				}

				const overContainer = findContainer(overId);
				const activeContainer = findContainer(active.id);

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
			}}
			onDragEnd={({ active, over }) => {
				if (active.id in items && over?.id) {
					setContainers((containers: any) => {
						const activeIndex = containers.indexOf(active.id);
						const overIndex = containers.indexOf(over.id);

						return arrayMove(containers, activeIndex, overIndex);
					});
				}

				const activeContainer = findContainer(active.id);

				if (!activeContainer) {
					setActiveId(null);
					return;
				}

				const overId = over?.id;

				if (overId == null) {
					setActiveId(null);
					return;
				}

				const overContainer = findContainer(overId);

				if (overContainer) {
					const activeIndex = items[activeContainer].indexOf(
						active.id,
					);
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
			}}
			onDragCancel={onDragCancel}
		>
			<div
				style={{
					boxSizing: 'border-box',
					zIndex: 1,
					position: 'relative',
				}}
			>
				<SortableContext
					items={containers}
					strategy={horizontalListSortingStrategy}
				>
					<div className="flex gap-2 overflow-x-auto">
						{containers.map((containerId: any) => (
							<DroppableContainer
								key={containerId}
								id={containerId}
								label={`Container ${containerId}`}
								items={items[containerId]}
								onRemove={() => handleRemove(containerId)}
							>
								<SortableContext
									items={items[containerId]}
									strategy={verticalListSortingStrategy}
								>
									{items[containerId].map(
										(value: any, index: any) => {
											return (
												<SortableItem
													key={value}
													id={value}
													index={index}
													containerId={containerId}
													getIndex={getIndex}
												/>
											);
										},
									)}
								</SortableContext>
							</DroppableContainer>
						))}
					</div>
				</SortableContext>
			</div>
			{createPortal(
				<DragOverlay adjustScale={false}>
					{activeId
						? containers.includes(activeId)
							? renderContainerDragOverlay(activeId)
							: renderSortableItemDragOverlay(activeId)
						: null}
				</DragOverlay>,
				document.body,
			)}
		</DndContext>
	);
};

export default TestTodo;
