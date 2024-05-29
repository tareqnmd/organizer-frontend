import { Badge } from '@/components/ui/badge';
import { serverAuthFetch } from '@/lib/helper/fetch';
import NoteAction from './NoteAction';
import Link from 'next/link';

export const getFeaturedNote = async () => {
	try {
		const res = await serverAuthFetch('note/featured', {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const FeaturedNote = async () => {
	const note = await getFeaturedNote();
	return note?.id ? (
		<div className="border rounded-md overflow-hidden">
			<div className="p-2 bg-gray-200 border-b flex items-center gap-2">
				<Link href={`/note/${note.id}`}>
					<span className="font-medium">{note?.subject}</span>
				</Link>
				<Badge className="ml-auto">New</Badge>
				<NoteAction note={note} />
			</div>
			<div
				className="p-2"
				dangerouslySetInnerHTML={{ __html: note?.details ?? `` }}
			/>
		</div>
	) : null;
};

export default FeaturedNote;
