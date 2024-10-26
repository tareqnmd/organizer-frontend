import NoteDetails from '@/components/modules/note/NoteDetails';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/shared/server-fetch';

export async function generateMetadata({ params }: { params: { id: string } }) {
	const { data: note } = await generateDataFromServer(
		`note/${params.id}`,
		nextProperties({}),
	);
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
