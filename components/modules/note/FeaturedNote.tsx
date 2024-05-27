import { Badge } from '@/components/ui/badge';
import { serverAuthFetch } from '@/lib/helper/fetch';
import { Star } from 'lucide-react';

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
	return note?.id ? (
		<div className="border rounded-md overflow-hidden">
			<div className="p-2 bg-gray-200 border-b flex items-center gap-2">
				<span className="font-medium">{note?.subject}</span>
				<Badge className="ml-auto">New</Badge>
				{note?.starred && (
					<Star
						size={20}
						fill="black"
					/>
				)}
			</div>
			<div
				className="p-2"
				dangerouslySetInnerHTML={{ __html: note?.details ?? `` }}
			/>
		</div>
	) : null;
};

export default FeaturedNote;
