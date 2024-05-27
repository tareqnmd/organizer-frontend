import FeaturedNote from './FeaturedNote';
import NoteCreate from './NoteCreate';
import RecentNotes from './RecentNotes';
import StarredNotes from './StarredNotes';

const Note = () => {
	return (
		<div className="grid gap-4">
			<NoteCreate />
			<FeaturedNote />
			<RecentNotes />
			<StarredNotes />
		</div>
	);
};

export default Note;
