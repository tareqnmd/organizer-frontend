import { serverAuthFetch } from '@/lib/helper/fetch';
import {
	NoteType,
	NotesParamType,
} from '@/types/modules/note/budget-note-types';
import NoteCard from './NoteCard';
import NoteCreate from './NoteCreate';

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

const Notes = async ({
	searchOptions = {},
}: {
	searchOptions?: NotesParamType;
}) => {
	const notes = await getAllNote(searchOptions);
	return (
		<div className="grid gap-4">
			<NoteCreate />
			<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
				{notes?.map((note: NoteType) => (
					<NoteCard
						key={note?.id}
						note={note}
					/>
				))}
			</div>
		</div>
	);
};

export default Notes;
