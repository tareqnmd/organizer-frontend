import { serverAuthFetch } from '@/lib/helper/fetch';
import {
	NoteType,
	NotesParamType,
} from '@/types/modules/note/budget-note-types';
import NoteSnippet from './NoteSnippet';
import NotesAction from './NotesAction';

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

const Notes = async ({ searchOptions }: { searchOptions: NotesParamType }) => {
	const notes = await getAllNote(searchOptions);
	return (
		<>
			<NotesAction params={searchOptions} />
			<div className="grid grid-cols-3 gap-4">
				{notes.map((note: NoteType) => (
					<NoteSnippet
						key={note?.id}
						note={note}
					/>
				))}
			</div>
		</>
	);
};

export default Notes;
