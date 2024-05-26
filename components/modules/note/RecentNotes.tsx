import { serverAuthFetch } from '@/lib/helper/fetch';
import Notes from './NoteSnippets';


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
	const recent_notes = await getRecentNotes();
	return (
		<Notes
			title="Recent Notes"
			notes={recent_notes}
		/>
	);
};

export default RecentNotes;
