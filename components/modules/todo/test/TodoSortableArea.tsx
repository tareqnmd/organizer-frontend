import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { CardType } from '@/lib/helper/todo';
import { horizontalListSortingStrategy } from '@dnd-kit/sortable';
import DroppableContainer from './DroppableContainer';
import SortableItem from './SortableItem';

const TodoSortableArea = ({
	containers,
	items,
	handleRemove,
}: {
	containers: string[];
	items: { [key: string]: CardType[] };
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
							{containers.map((containerId: string) => (
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
											(card: CardType, index: number) => {
												return (
													<SortableItem
														key={card.id}
														id={card.id}
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
