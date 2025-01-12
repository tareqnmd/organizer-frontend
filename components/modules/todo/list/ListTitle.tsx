import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { getBoardState } from '@/store/features/todo/board/slice';
import { useEditListMutation } from '@/store/features/todo/list/api';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const ListTitle = ({ listId }: { listId: string }) => {
	const { getBoardContainer } = useSelector(getBoardState);
	const list = getBoardContainer(listId);

	const [updateTitle] = useEditListMutation();
	const [newTitle, setNewTitle] = useState(list?.title ?? '');
	const debouncedUpdateTitle = useDebounce(newTitle, 1000);
	const [isEditing, setIsEditing] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTitle(e.target.value);
	};

	useEffect(() => {
		if (debouncedUpdateTitle === list?.title) return;
		debouncedUpdateTitle &&
			updateTitle({
				id: list?.id ?? '',
				data: { title: debouncedUpdateTitle },
			});
	}, [updateTitle, debouncedUpdateTitle, list?.id, list?.title]);

	return isEditing ? (
		<Input
			ref={inputRef}
			type="text"
			value={newTitle}
			onChange={titleChangeHandler}
			onBlur={() => setIsEditing(false)}
			className="h-auto rounded-none border-0 border-b border-b-transparent !bg-transparent bg-white p-0 text-center text-base font-bold !shadow-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:!bg-transparent"
		/>
	) : (
		<span
			className="truncate border-b border-b-[#00000000] text-base font-bold"
			onClick={() => {
				setIsEditing(true);
				setTimeout(() => inputRef.current?.focus(), 0);
			}}
		>
			{newTitle}
		</span>
	);
};

export default ListTitle;
