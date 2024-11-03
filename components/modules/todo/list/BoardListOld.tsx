import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Check, Grip, Plus, X } from 'lucide-react';
import { useState } from 'react';
import BoardListCardOld from './BoardListCardOld';
const BoardListOld = ({ list, listCards, setCards }: any) => {
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
	const [cardForm, setCardForm] = useState(false);
	const [cardName, setCardName] = useState('');

	const clearCard = () => {
		setCardForm(false);
		setCardName('');
	};

	const addCard = () => {
		try {
			setCards((prev: any) => [
				...prev,
				{
					id: Math.random().toString(),
					title: cardName,
					listId: list.id,
				},
			]);
			setCardForm(false);
			setCardName('');
		} catch (error) {
			setCardForm(false);
			setCardName('');
		}
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
						<div className="mt-2">
							{!cardForm ? (
								<button
									className="flex w-full items-center justify-center gap-2 rounded border p-2 text-sm"
									onClick={() => setCardForm(true)}
								>
									<Plus size={14} />
									Add Card
								</button>
							) : (
								<div className="flex items-center justify-between gap-2">
									<input
										className="w-full border-b p-1 focus-visible:outline-none"
										type="text"
										value={cardName}
										autoFocus
										onChange={(e) =>
											setCardName(e.target.value)
										}
									/>
									<button
										className="border p-1.5"
										onClick={addCard}
									>
										<Check size={16} />
									</button>
									<button
										className="border p-1.5"
										onClick={clearCard}
									>
										<X size={16} />
									</button>
								</div>
							)}
						</div>
					</SortableContext>
				</div>
			</div>
		</div>
	);
};

export default BoardListOld;
