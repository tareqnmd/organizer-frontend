import FeaturedNote from './FeaturedNote';
import PinnedNotes from './PinnedNotes';
import RecentNotes from './RecentNotes';

const Note = () => {
	return (
		<div className="grid gap-4 grid-cols-4">
			<div className='col-span-2'>
				<FeaturedNote />
			</div>
			<div>
				<RecentNotes />
			</div>
			<div>
				<PinnedNotes />
			</div>
		</div>
	);
};

export default Note;
