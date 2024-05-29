import { NoteType } from '@/types/modules/note/budget-note-types';
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
