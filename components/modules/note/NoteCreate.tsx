'use client';
import { Button } from '@/components/ui/button';
import { getError } from '@/lib/helper/common';
import { useCreateNoteMutation } from '@/store/features/note/api';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

const NoteCreate = () => {
	const router = useRouter();
	const [
		createNote,
		{
			isLoading: isCreateLoading,
			isError: isCreateError,
			isSuccess: isCreateSuccess,
			error: createError,
			data,
		},
	] = useCreateNoteMutation();

	const handleCreate = async () => {
		await createNote({ subject: 'Untitled', details: '' });
	};

	useEffect(() => {
		if (isCreateSuccess && data?.id) {
			router.push(`/note/${data.id}`);
		} else if (isCreateError) {
			toast.error(getError(createError));
		}
	}, [createError, data, isCreateError, isCreateSuccess, router]);

	return (
		<Button
			onClick={handleCreate}
			disabled={isCreateLoading}
			size="sm"
			className="flex items-center gap-1 ml-auto text-sm"
		>
			{isCreateLoading ? (
				<Loader
					className="animate-spin"
					size={16}
				/>
			) : null}
			{isCreateLoading ? 'Creating Note' : 'New Note'}
		</Button>
	);
};

export default NoteCreate;
