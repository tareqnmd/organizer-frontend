import NotepadView from '@/components/note/NoteView';

const page = ({ params }: { params: { id: string } }) => {
	return <NotepadView noteId={params?.id} />;
};

export default page;
