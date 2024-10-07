import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Grip } from 'lucide-react';
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
		touchAction: 'none',
	};
	return (
		<div
			ref={setNodeRef}
			key={list.id}
			style={style}
			className={`w-[280px] bg-white relative ${isDragging ? 'z-20' : 'z-0'}`}
		>
			<div className={`border shadow rounded p-2`}>
				<div className="flex items-center justify-between m-2">
					<strong>{list?.title ?? ''}</strong>
					<button
						{...listeners}
						{...attributes}
					>
						<Grip
							size={18}
							className="active:cursor-grabbing cursor-grab"
						/>
					</button>
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
		</div>
	);
};

export default BoardList;
