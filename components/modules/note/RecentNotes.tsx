import { generateDataFromServer } from '@/lib/helper/fetch';
import { NoteType } from '@/types/modules/note/budget-note-types';
import NoteCard from './NoteCard';

const RecentNotes = async () => {
	const { data: recentNotes } = await generateDataFromServer(
		'note/all?limit=6',
		{
			next: { revalidate: 0 },
		}
	);
	return recentNotes?.length > 0 ? (
		<div className="grid gap-2">
			<h3 className="font-bold">Recent :</h3>
			<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
				{recentNotes?.map((note: NoteType) => (
					<NoteCard
						key={note.id}
						note={note}
					/>
				))}
			</div>
		</div>
	) : null;
};

export default RecentNotes;
