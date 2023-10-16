import { PageHeader } from '@/styles/globalStyledComponent';
import NoteCard from './NoteCard';

const NoteDetails = ({ notes }: any) => {
	return (
		<>
			<PageHeader>Notes:</PageHeader>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
				{notes?.map((note: any) => (
					<NoteCard
						key={note?._id}
						note={note}
					/>
				))}
			</div>
		</>
	);
};

export default NoteDetails;
