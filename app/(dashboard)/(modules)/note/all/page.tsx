import Notes from '@/components/modules/note/Notes';
import { NotesParamType } from '@/types/modules/note/budget-note-types';

const Page = ({ searchParams }: { searchParams: NotesParamType }) => {
	return <Notes searchOptions={searchParams} />;
};

export default Page;
