import AllNotes, { NotesParamType } from '@/components/modules/Note/AllNotes';

const Page = ({ searchParams }: { searchParams: NotesParamType }) => {
	return <AllNotes searchOptions={searchParams} />;
};

export default Page;
