import NoteDetails from '@/components/modules/note/NoteDetails';
import { generateDataFromServer } from '@/lib/helper/fetch';

export async function generateMetadata({ params }: { params: { id: string } }) {
	const { data: note } = await generateDataFromServer(`note/${params.id}`, {
		next: { revalidate: 0 },
	});
	return {
		title: note.subject,
		description: note.subject,
		openGraph: {
			images: '/android-chrome-192x192.png',
		},
	};
}

const Page = ({ params }: { params: { id: string } }) => {
	return <NoteDetails id={params.id} />;
};

export default Page;
