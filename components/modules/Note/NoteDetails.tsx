export const getNoteDetails = (id: string) => {
	try {
		return {};
	} catch (error) {}
};

const NoteDetails = ({ id }: { id: string }) => {
	const note = getNoteDetails(id);
	return <></>;
};

export default NoteDetails;
