import Notes from './NoteSnippets';
export const getRecentNotes = async () => {
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

const PinnedNotes = async () => {
	const recent_notes = await getRecentNotes();
	return (
		<Notes
			title="Pinned Notes"
			notes={recent_notes}
		/>
	);
};

export default PinnedNotes;
