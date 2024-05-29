'use client';
import ErrorMessage from '@/components/common/message/ErrorMessage';
import SuccessMessage from '@/components/common/message/SuccessMessage';
import { getError } from '@/lib/helper/common';
import { useEditNoteMutation } from '@/store/features/note/api';
import { NoteType } from '@/types/modules/note/budget-note-types';
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
		if (isError || isSuccess) {
			toast(
				isError ? (
					<ErrorMessage message={getError(error)} />
				) : (
					<SuccessMessage
						message={`Note successfully ${
							data.starred === false ? 'remove from starred' : 'starred'
						}`}
					/>
				)
			);
			router.refresh();
		}
	}, [data.starred, error, isError, isSuccess, router]);

	return (
		<button
			onClick={statusHandler}
			disabled={isLoading}
		>
			{note.starred === false ? (
				<StarIcon
					className="cursor-pointer"
					size={16}
				/>
			) : (
				<StarIcon
					className="cursor-pointer"
					size={16}
					fill="black"
				/>
			)}
		</button>
	);
};

export default NoteStarred;
