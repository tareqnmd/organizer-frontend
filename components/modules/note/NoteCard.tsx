import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { baseDateFormat } from '@/lib/helper/date';
import { NoteType } from '@/types/modules/note/budget-note-types';
import Link from 'next/link';
import NoteAction from './NoteAction';

const NoteCard = ({ note }: { note: NoteType }) => {
	return (
		<Card className="h-full hover:shadow transition overflow-hidden">
			<CardHeader className="p-2 border-b bg-gray-200">
				<CardTitle className="text-md w-full flex justify-between">
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
					className="truncate max-h-10"
				/>
			</CardContent>
		</Card>
	);
};

export default NoteCard;
