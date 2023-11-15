import NotepadForm from '@/components/note/NoteForm';

const page = ({ params }: { params: { id: string } }) => {
	return <NotepadForm noteId={params?.id} />;
};

export default page;
