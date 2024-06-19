import { generateDataFromServer } from '@/lib/helper/fetch';
import {
	NoteType,
	NotesParamType,
} from '@/types/modules/note/budget-note-types';
import NoteCard from './NoteCard';
import NoteCreate from './NoteCreate';

const Notes = async ({
	searchOptions = {},
}: {
	searchOptions?: NotesParamType;
}) => {
	const queryParams = new URLSearchParams(searchOptions);
	const url = `note/all?${queryParams}`;
	const { data: notes } = await generateDataFromServer(url, {
		next: { revalidate: 0 },
	});

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
