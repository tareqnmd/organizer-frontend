import { Badge } from '@/components/ui/badge';
import { generateDataFromServer } from '@/lib/helper/fetch';
import Link from 'next/link';
import NoteAction from './NoteAction';

const FeaturedNote = async () => {
	const { data: note } = await generateDataFromServer('note/featured', {
		next: { revalidate: 0 },
	});
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
