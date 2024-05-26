import FeaturedNote from './FeaturedNote';
import RecentNotes from './RecentNotes';
import StarredNotes from './StarredNotes';

const Note = () => {
	return (
		<div className="grid gap-4">
			<FeaturedNote />
			<RecentNotes />
			<StarredNotes />
		</div>
	);
};

export default Note;
