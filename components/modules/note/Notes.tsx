import { NoteType, NotesParamType } from '@/lib/helper/note';
import { generateDataFromServer, nextProperties } from '@/lib/utils';
import NoteCard from './NoteCard';
import NoteCreate from './NoteCreate';

const Notes = async ({
	searchOptions = {},
}: {
	searchOptions?: NotesParamType;
}) => {
	const queryParams = new URLSearchParams(searchOptions);
	const url = `note/all?${queryParams}`;
	const { data: notes } = await generateDataFromServer(
		url,
		nextProperties({}),
	);

	return (
		<div className="grid gap-4">
			<NoteCreate />
			<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{notes?.map((note: NoteType) => (
					<NoteCard key={note?.id} note={note} />
				))}
			</div>
		</div>
	);
};

export default Notes;
