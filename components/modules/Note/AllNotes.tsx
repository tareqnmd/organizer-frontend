import { authFetch } from '@/lib/fetch';
import NoteSnippet, { NoteSnippetType } from './NoteSnippet';

export const getAllNote = async () => {
	const res = await authFetch('note');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const AllNotes = async () => {
	const notes = await getAllNote();
	return (
		<>
			<div className="grid grid-cols-3 gap-4">
				{notes.map((note: NoteSnippetType) => (
					<NoteSnippet
						key={note?._id}
						note={note}
					/>
				))}
			</div>
		</>
	);
};

export default AllNotes;
