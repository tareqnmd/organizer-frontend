import AllNotes, { NotesParamType } from '@/components/modules/note-m/AllNotes';

const Page = ({ searchParams }: { searchParams: NotesParamType }) => {
	return <AllNotes searchOptions={searchParams} />;
};

export default Page;
