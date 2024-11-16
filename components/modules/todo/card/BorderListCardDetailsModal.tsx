import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { CardType } from '@/lib/helper/todo';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import BoardListCardTitle from './BoardListCardTitle';
import BorderListCardDetails from './BorderListCardDetails';

const BorderListCardDetailsModal = ({ card }: { card: CardType }) => {
	const isFirstRender = useRef(false);
	const router = useRouter();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (isFirstRender.current) {
			if (!open) {
				router.refresh();
			}
		} else {
			isFirstRender.current = true;
		}
	}, [card, open, router]);

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

export default BorderListCardDetailsModal;
