'use client';
import { useGetNoteQuery } from '@/features/note/api';
import { PageHeader } from '@/styles/globalStyledComponent';
import Loading from '../ui/loader/Loading';
import NoteDetailView from './NoteDetailView';

const NoteView = ({ noteId }: { noteId: string }) => {
	const { data: note, isFetching } = useGetNoteQuery(noteId, {
		skip: !noteId,
	});
	return (
		<>
			<PageHeader>Note View:</PageHeader>
			<Loading loading={isFetching}>
				<NoteDetailView note={note} />
			</Loading>
		</>
	);
};

export default NoteView;
