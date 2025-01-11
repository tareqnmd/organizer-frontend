import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { getBoardState } from '@/store/features/todo/board/slice';
import { horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useSelector } from 'react-redux';
import DroppableContainer from './DroppableContainer';
import AddList from './list/AddList';
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
						<div className="flex items-start gap-2 overflow-x-auto">
							{containers?.map((containerId: any) => (
								<DroppableContainer
									key={containerId}
									id={containerId}
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
							<AddList />
						</div>
					</SortableContext>
				</div>
			</SortableContext>
		</div>
	);
};

export default TodoSortableArea;
