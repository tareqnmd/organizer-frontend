import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { getBoardState } from '@/store/features/todo/card/slice';
import { horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useSelector } from 'react-redux';
import DroppableContainer from './DroppableContainer';
import SortableItem from './SortableItem';

const TodoSortableArea = ({
	handleRemove,
}: {
	handleRemove: (id: string) => void;
}) => {
	const { containers, items, getBoardContainer } = useSelector(getBoardState);
	return (
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
							{containers?.map((containerId: any) => (
								<DroppableContainer
									key={containerId}
									id={containerId}
									label={
										getBoardContainer(containerId)?.title
									}
									items={items[containerId]}
									onRemove={() => handleRemove(containerId)}
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
						</div>
					</SortableContext>
				</div>
			</SortableContext>
		</div>
	);
};

export default TodoSortableArea;
