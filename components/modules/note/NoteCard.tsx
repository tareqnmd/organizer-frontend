import { Badge } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { NoteType } from '@/lib/helper/note';
import { baseDateFormat, cn } from '@/lib/utils';
import Link from 'next/link';
import NoteAction from './NoteAction';

const NoteCard = ({
	note,
	featured = false,
}: {
	note: NoteType;
	featured?: boolean;
}) => {
	return (
		<Card className="h-full overflow-hidden shadow shadow-light-shadow transition-all dark:shadow-dark-shadow">
			<CardHeader className="border-b border-light-border/25 p-2 dark:border-dark-border/25">
				<CardTitle
					className={cn(
						'text-md flex w-full justify-between',
						featured && 'p-2',
					)}
				>
					<Link href={`/note/${note.id}`}>
						<span>{note?.subject}</span>
					</Link>
					{featured ? (
						<Badge className="ml-auto mr-2">New</Badge>
					) : null}
					<NoteAction note={note} />
				</CardTitle>
				{featured ? null : (
					<CardDescription className="!m-0 text-gray-900">
						{baseDateFormat(note?.createdAt)}
					</CardDescription>
				)}
			</CardHeader>
			<CardContent className="p-2">
				<div
					dangerouslySetInnerHTML={{ __html: note?.details ?? `` }}
					className={cn(featured ? 'p-2' : 'max-h-12 truncate')}
				/>
			</CardContent>
		</Card>
	);
};

export default NoteCard;
