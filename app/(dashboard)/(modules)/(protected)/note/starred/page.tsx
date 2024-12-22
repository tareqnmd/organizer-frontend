import Notes from '@/components/modules/note/Notes';

const NoteStarredPage = () => {
	return <Notes searchOptions={{ starred: 'true' }} />;
};

export default NoteStarredPage;
