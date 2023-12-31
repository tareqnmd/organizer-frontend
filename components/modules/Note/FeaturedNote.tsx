import { authFetch } from '@/lib/fetch';

export const dynamic = 'force-dynamic';

export const getFeaturedNote = async () => {
	const res = await authFetch('note/feature');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const FeaturedNote = async () => {
	const note = await getFeaturedNote();
	return (
		<div className="flex flex-col gap-2 w-full">
			<h3 className="text-lg font-medium">Featured Note:</h3>
			<div className="border rounded-md overflow-hidden">
				<h3 className="p-2 border-b">{note.subject}</h3>
				<div
					className="p-2"
					dangerouslySetInnerHTML={{ __html: note?.details }}
				/>
			</div>
		</div>
	);
};

export default FeaturedNote;
