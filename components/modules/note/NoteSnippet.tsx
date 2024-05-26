import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { NoteType } from '@/types/modules/note/budget-note-types';
import Link from 'next/link';

const NoteSnippet = ({ note }: { note: NoteType }) => {
	return (
		<Link href={`/note/${note.id}`}>
			<Card className="h-full hover:shadow transition overflow-hidden">
				<CardHeader className="p-2 border-b bg-gray-200">
					<CardTitle className="text-md w-full flex justify-between">
						<span>{note?.subject}</span>
					</CardTitle>
					<CardDescription className="!m-0 text-gray-900">
						{note?.createdAt}
					</CardDescription>
				</CardHeader>
				<CardContent className="p-2">
					<div
						dangerouslySetInnerHTML={{ __html: note?.details }}
						className="truncate max-h-10"
					/>
				</CardContent>
			</Card>
		</Link>
	);
};

export default NoteSnippet;
