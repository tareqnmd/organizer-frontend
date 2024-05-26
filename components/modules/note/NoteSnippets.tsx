import { NotesType } from '@/types/modules/note/budget-note-types';
import NoteCard from './NoteCard';

const NoteSnippets = ({
	notes,
	title,
}: {
	notes: NotesType;
	title?: string;
}) => {
	return (
		<>
			{title && <h3 className="text-lg font-medium mb-2">{title} :</h3>}
			<div className="grid grid-cols-1 gap-4">
				{notes.map((note) => (
					<NoteCard
						key={note.id}
						note={note}
					/>
				))}
			</div>
		</>
	);
};

export default NoteSnippets;
