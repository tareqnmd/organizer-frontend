import { authFetch } from '@/lib/fetch';
import Notes from './NoteSnippets';
export const dynamic = 'force-dynamic';

export const getRecentNotes = async () => {
	const res = await authFetch('note/pinned');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
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
