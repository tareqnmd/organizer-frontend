import { serverAuthFetch } from '@/lib/fetch';
import Notes from './NoteSnippets';
export const dynamic = 'force-dynamic';

export const getRecentNotes = async () => {
	const res = await serverAuthFetch('note/all?type=recent');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const RecentNotes = async () => {
	const recent_notes = await getRecentNotes();
	return (
		<Notes
			title="Recent Notes"
			notes={recent_notes}
		/>
	);
};

export default RecentNotes;
