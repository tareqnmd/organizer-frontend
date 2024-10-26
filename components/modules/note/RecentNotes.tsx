import { NoteType } from '@/lib/helper/modules/note';
import { generateDataFromServer, nextProperties } from '@/lib/utils';
import NoteCard from './NoteCard';

const RecentNotes = async () => {
	const { data: recentNotes } = await generateDataFromServer(
		'note/all?limit=6',
		nextProperties({}),
	);
	return recentNotes?.length > 0 ? (
		<div className="grid gap-2">
			<h3 className="font-bold">Recent :</h3>
			<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{recentNotes?.map((note: NoteType) => (
					<NoteCard key={note.id} note={note} />
				))}
			</div>
		</div>
	) : null;
};

export default RecentNotes;
