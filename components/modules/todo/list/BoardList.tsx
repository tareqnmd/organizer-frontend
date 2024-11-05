import { CardType, ListType } from '@/lib/helper/todo';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Grip } from 'lucide-react';
import BoardListCardOld from '../card/BoardListCard';
import BoardListCardForm from '../card/BoardListCardForm';

const BoardList = ({
	list,
	listCards,
	setCards,
}: {
	list: ListType;
	listCards: CardType[];
	setCards: (cards: CardType[]) => void;
}) => {
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
		zIndex: isDragging ? 50 : 0,
	};

	return (
		<div
			ref={setNodeRef}
			key={list.id}
			style={style}
			className={`relative w-[280px]`}
		>
			<div className={`rounded border bg-white p-2 shadow`}>
				<div className="m-2 flex items-center justify-between">
					<strong>{list?.title ?? ''}</strong>
					<button {...listeners} {...attributes}>
						<Grip
							size={18}
							className="cursor-grab active:cursor-grabbing"
						/>
					</button>
				</div>
				<div className="flex flex-col gap-2">
					<SortableContext items={listCards}>
						{listCards?.map((card: any) => (
							<BoardListCardOld key={card.id} card={card} />
						))}
						<BoardListCardForm
							listId={list.id}
							setCards={setCards}
						/>
					</SortableContext>
				</div>
			</div>
		</div>
	);
};

export default BoardList;
