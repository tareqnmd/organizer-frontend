import { CardType } from '@/lib/helper/todo';
import { getError } from '@/lib/utils';
import { useCreateCardMutation } from '@/store/features/todo/card/api';
import { Loader, X } from 'lucide-react';

import { Check } from 'lucide-react';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const BoardListCardForm = ({
	setCards,
	listId,
}: {
	setCards: (cards: CardType[]) => void;
	listId: string;
}) => {
	const router = useRouter();
	const [cardForm, setCardForm] = useState(false);
	const [cardName, setCardName] = useState('');

	const [createCard, { isLoading, data, isError, isSuccess }] =
		useCreateCardMutation();

	const addCard = async () => {
		await createCard({ title: cardName, listId });
	};

	const clearList = () => {
		setCardForm(false);
		setCardName('');
	};

	useEffect(() => {
		if (isSuccess && data?.id) {
			router.refresh();
			clearList();
		} else if (isError) {
			toast.error(getError('Failed to create list'));
		}
	}, [isError, isSuccess, data, setCards, router]);

	return (
		<div className="mt-2">
			{!cardForm ? (
				<button
					className="flex w-full items-center justify-center gap-2 rounded border p-2 text-sm"
					onClick={() => setCardForm(true)}
					disabled={isLoading}
				>
					<Plus size={14} />
					Add Card
				</button>
			) : (
				<div className="flex items-center justify-between gap-1">
					<input
						className="w-full border-b !bg-background-light p-1 !shadow-none focus-visible:outline-none"
						type="text"
						value={cardName}
						autoFocus
						onChange={(e) => setCardName(e.target.value)}
					/>
					<button
						disabled={isLoading}
						className="border p-1.5"
						onClick={addCard}
					>
						{isLoading ? (
							<Loader className="animate-spin" size={16} />
						) : (
							<Check size={16} />
						)}
					</button>
					{!isLoading && (
						<button className="border p-1.5" onClick={clearList}>
							<X size={16} />
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default BoardListCardForm;
