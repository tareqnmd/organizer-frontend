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
		<div className="flex flex-col gap-2 w-full">
			{title && <h3 className="text-lg font-medium">{title} :</h3>}
			{notes.map((note) => (
				<NoteSmallInfo
					key={note._id}
					note={note}
				/>
			))}
		</div>
	);
};

export default NoteSnippets;
