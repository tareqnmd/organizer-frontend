const NoteDetails = ({ notes }: any) => {
	return (
		<>
			{notes?.map((note: any) => (
				<>
					<>{note.name}</>
					<>{note.details}</>
				</>
			))}
		</>
	);
};

export default NoteDetails;
