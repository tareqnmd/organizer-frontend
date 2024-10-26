'use client';
import { NoteType } from '@/lib/helper/modules/note';
import { getError } from '@/lib/utils';
import { useEditNoteMutation } from '@/store/features/note/api';
import { StarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

const NoteStarred = ({ note }: { note: NoteType }) => {
	const router = useRouter();
	const [statusToggle, { isLoading, isError, isSuccess, error, data = {} }] =
		useEditNoteMutation();

	const statusHandler = () => {
		statusToggle({
			id: note.id,
			data: { starred: !note.starred },
		});
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(
				`Note successfully ${
					data.starred === false ? 'remove from starred' : 'starred'
				}`,
			);
			router.refresh();
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [data.starred, error, isError, isSuccess, router]);

	return (
		<button onClick={statusHandler} disabled={isLoading}>
			{note.starred === false ? (
				<StarIcon className="cursor-pointer" size={16} />
			) : (
				<StarIcon className="cursor-pointer" size={16} fill="black" />
			)}
		</button>
	);
};

export default NoteStarred;
