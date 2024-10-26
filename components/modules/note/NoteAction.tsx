import { NoteType } from '@/lib/helper/modules/note';
import NoteDelete from './NoteDelete';
import NoteStarred from './NoteStarred';

const NoteAction = ({ note }: { note: NoteType }) => {
	return (
		<div className="flex items-center gap-1">
			<NoteStarred note={note} />
			<NoteDelete note={note} />
		</div>
	);
};

export default NoteAction;
