import { ListType } from '@/lib/helper/todo';
import { getError } from '@/lib/utils';
import { useCreateListMutation } from '@/store/features/todo/list/api';
import { Loader, X } from 'lucide-react';

import { Check } from 'lucide-react';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const BoardListForm = ({
	setLists,
	boardId,
}: {
	setLists: (lists: ListType[]) => void;
	boardId: string;
}) => {
	const router = useRouter();
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
			router.refresh();
			clearList();
		} else if (isError) {
			toast.error(getError('Failed to create list'));
		}
	}, [isError, isSuccess, data, setLists, router]);

	return (
		<div className="w-[280px] rounded border bg-white p-2 shadow">
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
						className="w-full border-b p-1 focus-visible:outline-none"
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

export default BoardListForm;
