import { getError } from '@/lib/utils';
import {
	getBoardState,
	updateFullBoard,
} from '@/store/features/todo/board/slice';
import { useCreateListMutation } from '@/store/features/todo/list/api';
import { useAppDispatch } from '@/store/hooks';
import { Loader, X } from 'lucide-react';

import { Check } from 'lucide-react';

import { Plus } from 'lucide-react';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

const AddList = () => {
	const boardId = useSelector(getBoardState).boardId;
	const dispatch = useAppDispatch();
	const [listForm, setListForm] = useState(false);
	const [listName, setListName] = useState('');

	const [createList, { isLoading, data, isError, isSuccess }] =
		useCreateListMutation();

	const addList = async () => {
		await createList({ title: listName, boardId });
	};

	const clearList = () => {
		setListForm(false);
		setListName('');
	};

	useEffect(() => {
		if (isSuccess && data?.id) {
			dispatch(updateFullBoard({ addList: { ...data } }));
			clearList();
		} else if (isError) {
			toast.error(getError('Failed to create list'));
		}
	}, [isError, isSuccess, data, dispatch]);

	if (!boardId) return null;

	return (
		<div className="flex min-w-[300px] flex-col overflow-hidden rounded-lg bg-white p-2 text-dark transition-colors duration-300">
			{!listForm ? (
				<button
					className="flex w-full items-center justify-center gap-2 rounded border p-2 text-sm"
					onClick={() => setListForm(true)}
					disabled={isLoading}
				>
					<Plus size={14} />
					Add List
				</button>
			) : (
				<div className="flex items-center justify-between gap-1">
					<input
						className="w-full border-b !bg-white p-1 !shadow-none focus-visible:outline-none"
						type="text"
						value={listName}
						autoFocus
						onChange={(e) => setListName(e.target.value)}
					/>
					<button
						disabled={isLoading}
						className="border p-1.5"
						onClick={addList}
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

export default AddList;
