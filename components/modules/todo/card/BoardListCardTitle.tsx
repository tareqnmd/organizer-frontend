import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { CardType } from '@/lib/helper/todo';
import { useEditCardMutation } from '@/store/features/todo/card/api';
import { useEffect, useRef, useState } from 'react';

const BoardListCardTitle = ({ card }: { card: CardType }) => {
	const [updateTitle] = useEditCardMutation();
	const [newTitle, setNewTitle] = useState(card.title);
	const debouncedUpdateTitle = useDebounce(newTitle, 1000);
	const [isEditing, setIsEditing] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTitle(e.target.value);
	};

	useEffect(() => {
		if (debouncedUpdateTitle === card.title) return;
		if (debouncedUpdateTitle) {
			updateTitle({ id: card.id, data: { title: debouncedUpdateTitle } });
		}
	}, [updateTitle, debouncedUpdateTitle, card.id, card.title]);

	return isEditing ? (
		<Input
			ref={inputRef}
			type="text"
			value={newTitle}
			onChange={titleChangeHandler}
			onBlur={() => setIsEditing(false)}
			className="h-auto rounded-none border-0 !bg-transparent p-0 text-base shadow-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
		/>
	) : (
		<span
			className="text-base"
			onClick={() => {
				setIsEditing(true);
				setTimeout(() => inputRef.current?.focus(), 0);
			}}
		>
			{newTitle}
		</span>
	);
};

export default BoardListCardTitle;
