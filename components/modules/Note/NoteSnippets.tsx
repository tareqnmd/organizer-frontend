import NoteSmallInfo, { NoteSnippetType } from './NoteSnippet';

type NotesType = NoteSnippetType[];

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
					<NoteSmallInfo
						key={note._id}
						note={note}
					/>
				))}
			</div>
		</>
	);
};

export default NoteSnippets;
