import { Badge } from '@/components/ui/badge';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/shared/server-fetch';
import Link from 'next/link';
import NoteAction from './NoteAction';

const FeaturedNote = async () => {
	const { data: note } = await generateDataFromServer(
		'note/featured',
		nextProperties({}),
	);
	return note?.id ? (
		<div className="overflow-hidden rounded-md border">
			<div className="flex items-center gap-2 border-b bg-gray-200 p-2">
				<Link href={`/note/${note.id}`}>
					<span className="font-bold">{note?.subject}</span>
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
