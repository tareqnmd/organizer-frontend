import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
export type NoteSnippetType = {
	_id: string;
	subject: string;
	details: string;
	created_at: string;
};
const NoteSnippet = ({ note }: { note: NoteSnippetType }) => {
	return (
		<Link href={`/note/${note._id}`}>
			<Card className="h-full hover:shadow transition overflow-hidden">
				<CardHeader className="p-2 border-b">
					<CardTitle className="text-md w-full flex justify-between">
						<span>{note?.subject}</span>
					</CardTitle>
					<CardDescription className="!m-0">{note?.created_at}</CardDescription>
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
