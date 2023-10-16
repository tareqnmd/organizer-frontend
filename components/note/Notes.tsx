'use client';
import { useGetNotesQuery } from '@/features/note/api';
import NoteDetails from './NoteDetails';

const Notes = () => {
	const { data: notes } = useGetNotesQuery({});

	return <NoteDetails notes={notes} />;
};

export default Notes;
