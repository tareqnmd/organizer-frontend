import NoteDetails from '@/components/modules/note/NoteDetails';

const Page = ({ params }: { params: { id: string } }) => {
	return <NoteDetails id={params.id} />;
};

export default Page;
