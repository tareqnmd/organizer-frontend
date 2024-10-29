import { generateDataFromServer, nextProperties } from '@/lib/utils';
import NoteCard from './NoteCard';

const FeaturedNote = async () => {
	const { data: note } = await generateDataFromServer(
		'note/featured',
		nextProperties({}),
	);
	return note?.id ? <NoteCard featured note={note} /> : null;
};

export default FeaturedNote;
