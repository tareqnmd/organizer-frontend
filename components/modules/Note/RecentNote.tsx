import { Card } from 'antd';
import Link from 'next/link';
export type NoteType = {
	_id: string;
	subject: string;
	details: string;
	created_at: string;
};
const RecentNote = ({ note }: { note: NoteType }) => {
	return (
		<Link href={`/note/detail/${note._id}`}>
			<Card
				className="hover:shadow transition"
				extra={<small>{note.created_at}</small>}
				title={note.subject}
				size="small"
			>
				<p className="truncate">{note.details}</p>
			</Card>
		</Link>
	);
};

export default RecentNote;
