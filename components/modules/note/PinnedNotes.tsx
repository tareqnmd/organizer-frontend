import { serverAuthFetch } from '@/lib/helper/fetch';
import Notes from './NoteSnippets';


export const getRecentNotes = async () => {
	try {
		const res = await serverAuthFetch('note/all?type=pinned');
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const PinnedNotes = async () => {
	const recent_notes = await getRecentNotes();
	return (
		<Notes
			title="Pinned Notes"
			notes={recent_notes}
		/>
	);
};

export default PinnedNotes;
