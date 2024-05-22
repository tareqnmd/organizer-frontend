import { serverAuthFetch } from '@/lib/fetch';
import NoteForm from './NoteForm';

export const dynamic = 'force-dynamic';

export const getNoteDetails = async (id: string) => {
	const res = await serverAuthFetch(`note/${id}`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const NoteDetails = async ({ id }: { id: string }) => {
	const note = await getNoteDetails(id);
	return <NoteForm note={note} />;
};

export default NoteDetails;
