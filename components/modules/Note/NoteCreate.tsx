import NoteForm from './NoteForm';
import RecentNotes from './RecentNotes';

const NoteCreate = () => {
	return (
		<div className="grid gap-4 grid-cols-3">
			<div>
				<RecentNotes />
			</div>
			<div className="col-span-2">
				<NoteForm />
			</div>
		</div>
	);
};

export default NoteCreate;
