import { Badge } from '@/components/ui/badge';
import { serverAuthFetch } from '@/lib/helper/fetch';
import { Pin } from 'lucide-react';



export const getFeaturedNote = async () => {
	try {
		const res = await serverAuthFetch('note/featured');
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const FeaturedNote = async () => {
	const note = await getFeaturedNote();
	return (
		<div className="flex flex-col gap-2 w-full overflow-hidden">
			<h3 className="text-lg font-medium">Featured Note:</h3>
			<div className="border rounded-md overflow-hidden">
				<div className="p-2 bg-gray-200 border-b flex items-center gap-2">
					<span className="font-medium">{note.subject}</span>
					<Badge className="ml-auto">New</Badge>
					{note?.pinned && (
						<Pin
							size={20}
							fill="black"
						/>
					)}
				</div>
				<div
					className="p-2"
					dangerouslySetInnerHTML={{ __html: note?.details }}
				/>
			</div>
		</div>
	);
};

export default FeaturedNote;
