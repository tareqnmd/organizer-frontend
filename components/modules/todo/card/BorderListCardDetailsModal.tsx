import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { CardType } from '@/lib/helper/todo';
import { useState } from 'react';
import BorderListCardDetails from './BorderListCardDetails';

const BorderListCardDetailsModal = ({ card }: { card: CardType }) => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<div>{card.title}</div>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>{card.title}</DialogTitle>
				</DialogHeader>
				<BorderListCardDetails card={card} />
			</DialogContent>
		</Dialog>
	);
};

export default BorderListCardDetailsModal;
