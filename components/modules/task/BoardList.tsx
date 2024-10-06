import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import BoardListCard from './BoardListCard';
const BoardList = ({ list }: any) => {
	const {
		listeners,
		transform,
		transition,
		attributes,
		setNodeRef,
		isDragging,
	} = useSortable({ id: list.id, data: { type: 'List', list } });
	const style = {
		transition,
		transformOrigin: 'center',
		transform: CSS.Transform.toString(transform),
	};
	return (
		<div
			ref={setNodeRef}
			key={list.id}
			style={style}
			className={`border shadow rounded p-2 w-[280px] bg-white relative ${
				isDragging ? 'z-20' : 'z-0'
			}`}
		>
			<div className="flex items-center justify-between">
				{list?.title ?? ''}
				<GripVertical
					{...listeners}
					{...attributes}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<SortableContext items={list.cards}>
					{list?.cards.map((card: any) => (
						<BoardListCard
							key={card.id}
							card={card}
						/>
					))}
				</SortableContext>
			</div>
		</div>
	);
};

export default BoardList;
