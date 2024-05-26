import AllNotes, { NotesParamType } from '@/components/modules/note/AllNotes';

const Page = ({ searchParams }: { searchParams: NotesParamType }) => {
	return <AllNotes searchOptions={searchParams} />;
};

export default Page;
