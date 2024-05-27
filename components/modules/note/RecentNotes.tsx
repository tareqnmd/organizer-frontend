import { serverAuthFetch } from '@/lib/helper/fetch';
import { NoteType } from '@/types/modules/note/budget-note-types';
import NoteCard from './NoteCard';

export const getRecentNotes = async () => {
	try {
		const res = await serverAuthFetch('note/all?type=recent');
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const RecentNotes = async () => {
	const recentNotes = await getRecentNotes();
	return (
		<div className="grid gap-2">
			<h3 className="font-bold">Recent :</h3>
			<div className="grid grid-cols-2 gap-4">
				{recentNotes?.map((note: NoteType) => (
					<NoteCard
						key={note.id}
						note={note}
					/>
				))}
			</div>
		</div>
	);
};

export default RecentNotes;
