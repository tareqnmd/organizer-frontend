import { serverAuthFetch } from '@/lib/fetch';
import NoteSnippet, { NoteSnippetType } from './NoteSnippet';
import NotesAction from './NotesAction';

export type NotesParamType = { pinned?: string };

export const dynamic = 'force-dynamic';

export const getAllNote = async (params: NotesParamType) => {
	try {
		const queryParams = new URLSearchParams(params);
		const res = await serverAuthFetch(`note/all?${queryParams}`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const AllNotes = async ({
	searchOptions,
}: {
	searchOptions: NotesParamType;
}) => {
	const notes = await getAllNote(searchOptions);
	return (
		<>
			<NotesAction params={searchOptions} />
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
