import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { ListType } from '@/lib/helper/todo';
import { useEditListMutation } from '@/store/features/todo/list/api';
import { useEffect, useRef, useState } from 'react';

const BoardListTitle = ({ list }: { list: ListType }) => {
	const [updateTitle] = useEditListMutation();
	const [newTitle, setNewTitle] = useState(list.title);
	const debouncedUpdateTitle = useDebounce(newTitle, 1000);
	const [isEditing, setIsEditing] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTitle(e.target.value);
	};

	useEffect(() => {
		if (debouncedUpdateTitle === list.title) return;
		debouncedUpdateTitle &&
			updateTitle({ id: list.id, data: { title: debouncedUpdateTitle } });
	}, [updateTitle, debouncedUpdateTitle, list.id, list.title]);

	return isEditing ? (
		<Input
			ref={inputRef}
			type="text"
			value={newTitle}
			onChange={titleChangeHandler}
			onBlur={() => setIsEditing(false)}
			className="text-md h-auto rounded-none border-0 border-b border-b-light-border !bg-transparent p-0 font-bold shadow-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
		/>
	) : (
		<span
			className="text-md border-b border-b-[#00000000] font-bold"
			onClick={() => {
				setIsEditing(true);
				setTimeout(() => inputRef.current?.focus(), 0);
			}}
		>
			{newTitle}
		</span>
	);
};

export default BoardListTitle;
