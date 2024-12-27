import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { horizontalListSortingStrategy } from '@dnd-kit/sortable';
import DroppableContainer from './DroppableContainer';
import SortableItem from './SortableItem';

const TodoSortableArea = ({
	lists,
	items,
	handleRemove,
}: {
	lists: string[];
	items: { [key: string]: string[] };
	handleRemove: (id: string) => void;
}) => {
	return (
		<div
			style={{
				boxSizing: 'border-box',
				zIndex: 1,
				position: 'relative',
			}}
		>
			<SortableContext
				items={lists}
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
						items={lists}
						strategy={horizontalListSortingStrategy}
					>
						<div className="flex gap-2 overflow-x-auto">
							{lists.map((containerId: any) => (
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
