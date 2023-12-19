import { Card } from 'antd';
import Link from 'next/link';
export type NoteSnippetType = {
	_id: string;
	subject: string;
	details: string;
	created_at: string;
};
const NoteSnippet = ({ note }: { note: NoteSnippetType }) => {
	return (
		<Link href={`/note/detail/${note._id}`}>
			<Card
				className="h-full hover:shadow transition"
				extra={<small>{note?.created_at}</small>}
				title={note?.subject}
				size="small"
			>
				<div
					dangerouslySetInnerHTML={{ __html: note?.details }}
					className="truncate max-h-10"
				/>
			</Card>
		</Link>
	);
};

export default NoteSnippet;
