import { authFetch } from '@/lib/fetch';

export const dynamic = 'force-dynamic';

export const getNoteDetails = async (id: string) => {
	const res = await authFetch(`note/${id}`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const NoteDetails = async ({ id }: { id: string }) => {
	const note = await getNoteDetails(id);
	return (
		<div className="border rounded-md overflow-hidden">
			<h3 className="p-2 border-b">{note.subject}</h3>
			<div
				className="p-2"
				dangerouslySetInnerHTML={{ __html: note?.details }}
			/>
		</div>
	);
};

export default NoteDetails;
