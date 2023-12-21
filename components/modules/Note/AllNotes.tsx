import { authFetch } from '@/lib/fetch';
import NoteSnippet, { NoteSnippetType } from './NoteSnippet';
import NotesAction from './NotesAction';

export type NotesParamType = { pinned?: string };

export const dynamic = 'force-dynamic';

export const getAllNote = async (params: NotesParamType) => {
	const queryParams = new URLSearchParams(params);
	const res = await authFetch(`note?${queryParams}`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const AllNotes = async ({
	searchOptions,
}: {
	searchOptions: NotesParamType;
}) => {
	const notes = await getAllNote(searchOptions);
	return (
		<>
			<NotesAction />
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
