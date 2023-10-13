'use client';
import { useGetNoteQuery } from '@/features/note/api';
import { PageHeader } from '@/styles/globalStyledComponent';
import Loading from '../ui/loader/Loading';

const NoteView = ({ noteId }: { noteId: string }) => {
	const { data: note, isFetching } = useGetNoteQuery(noteId, {
		skip: !noteId,
	});
	return (
		<>
			<PageHeader>Note View:</PageHeader>
			<Loading loading={isFetching}>
				<p>Name : {note?.name}</p>
				<p>Details : </p>
				<div>{note?.details}</div>
			</Loading>
		</>
	);
};

export default NoteView;
