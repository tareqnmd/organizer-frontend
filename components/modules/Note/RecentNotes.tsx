import RecentNote from './RecentNote';
export const getRecentNotes = () => {
	try {
		return [
			{
				_id: '55',
				subject: 'Test 1',
				details:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum et laudantium omnis quas optio alias quia illo, necessitatibus id incidunt, doloremque inventore, earum laborum sed nesciunt a hic iusto autem quibusdam reiciendis eaque assumenda consectetur? Illo, maiores! Praesentium, aliquid ad.',
				created_at: '10-10-10',
			},
		];
	} catch (error) {
		return [];
	}
};

const RecentNotes = () => {
	const recent_notes = getRecentNotes();
	return (
		<div className="flex flex-col gap-2 w-full">
			<h3 className="text-lg font-medium">Recent Notes:</h3>
			{recent_notes.map((note) => (
				<RecentNote
					key={note._id}
					note={note}
				/>
			))}
		</div>
	);
};

export default RecentNotes;
