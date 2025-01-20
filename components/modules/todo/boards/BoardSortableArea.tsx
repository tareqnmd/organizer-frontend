import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { getBoardState } from '@/store/features/todo/board/slice';
import { horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import SortableItem from '../card/CardItemSortable';
import AddList from '../list/AddList';
import DroppableContainer from '../list/DroppableContainer';

const BoardSortableArea = ({
	handleRemove,
}: {
	handleRemove: (id: string) => void;
}) => {
	const { containers, items } = useSelector(getBoardState);

	const refDndContext = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (refDndContext.current) {
			setHeight(refDndContext.current.getBoundingClientRect().height);
		}
	}, [refDndContext]);

	return (
		<div
			style={{
				boxSizing: 'border-box',
				zIndex: 1,
				position: 'relative',
				height: '100%',
			}}
			ref={refDndContext}
		>
			<SortableContext
				items={containers}
				strategy={horizontalListSortingStrategy}
			>
				<div
					style={{
						boxSizing: 'border-box',
						zIndex: 1,
						position: 'relative',
						height: '100%',
					}}
				>
					<SortableContext
						items={containers}
						strategy={horizontalListSortingStrategy}
					>
						<div className="flex h-full items-start gap-2 overflow-x-auto">
							{containers?.map((containerId: any) => (
								<DroppableContainer
									key={containerId}
									id={containerId}
									items={items[containerId]}
									onRemove={() => handleRemove(containerId)}
									height={height}
								>
									<SortableContext
										items={items[containerId]}
										strategy={verticalListSortingStrategy}
									>
										{items[containerId]?.map(
											(value: any, index: any) => {
												return (
													<SortableItem
														key={value}
														id={value}
														index={index}
													/>
												);
											},
										)}
									</SortableContext>
								</DroppableContainer>
							))}
							<AddList />
						</div>
					</SortableContext>
				</div>
			</SortableContext>
		</div>
	);
};

export default BoardSortableArea;
