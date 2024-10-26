import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { NoteType } from '@/lib/helper/modules/note';
import { baseDateFormat } from '@/lib/helper/shared/date';
import Link from 'next/link';
import NoteAction from './NoteAction';

const NoteCard = ({ note }: { note: NoteType }) => {
	return (
		<Card className="h-full overflow-hidden transition hover:shadow">
			<CardHeader className="border-b bg-gray-200 p-2">
				<CardTitle className="text-md flex w-full justify-between">
					<Link href={`/note/${note.id}`}>
						<span>{note?.subject}</span>
					</Link>
					<NoteAction note={note} />
				</CardTitle>
				<CardDescription className="!m-0 text-gray-900">
					{baseDateFormat(note?.createdAt)}
				</CardDescription>
			</CardHeader>
			<CardContent className="p-2">
				<div
					dangerouslySetInnerHTML={{ __html: note?.details ?? `` }}
					className="max-h-12 truncate"
				/>
			</CardContent>
		</Card>
	);
};

export default NoteCard;
