import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { getBoardState } from '@/store/features/todo/board/slice';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import BorderListCardDetails from './CardDetails';
import BoardListCardTitle from './CardTitle';

const CardModal = ({ cardId }: { cardId: string }) => {
	const { getBoardCard } = useSelector(getBoardState);
	const card = useMemo(() => getBoardCard(cardId), [cardId, getBoardCard]);
	const [open, setOpen] = useState(false);

	if (!card) {
		return null;
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<div>{card.title}</div>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>
						<BoardListCardTitle card={card} />
					</DialogTitle>
				</DialogHeader>
				<BorderListCardDetails card={card} />
			</DialogContent>
		</Dialog>
	);
};

export default CardModal;
