import { NoteType } from '@/lib/helper/note';
import { generateDataFromServer, nextProperties } from '@/lib/utils';
import NoteCard from './NoteCard';

const StarredNotes = async () => {
	const { data: starredNotes } = await generateDataFromServer(
		'note/all?starred=true',
		nextProperties({}),
	);
	return starredNotes?.length > 0 ? (
		<div className="grid gap-2">
			<h3 className="font-bold">Starred :</h3>
			<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{starredNotes?.map((note: NoteType) => (
					<NoteCard key={note.id} note={note} />
				))}
			</div>
		</div>
	) : null;
};

export default StarredNotes;
