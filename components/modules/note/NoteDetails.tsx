import { generateDataFromServer } from '@/lib/helper/fetch';
import NoteForm from './NoteForm';

const NoteDetails = async ({ id }: { id: string }) => {
	const { data: note } = await generateDataFromServer(`note/${id}`, {
		next: { revalidate: 0 },
	});
	return <NoteForm note={note} />;
};

export default NoteDetails;
