import {
	generateDataFromServer,
	nextProperties,
} from '@/helper/shared/server-fetch';
import NoteForm from './NoteForm';

const NoteDetails = async ({ id }: { id: string }) => {
	const { data: note } = await generateDataFromServer(
		`note/${id}`,
		nextProperties({})
	);
	return <NoteForm note={note} />;
};

export default NoteDetails;
