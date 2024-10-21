import { NoteType } from '@/helper/modules/note';
import {
	generateDataFromServer,
	nextProperties,
} from '@/helper/shared/server-fetch';
import NoteCard from './NoteCard';

const StarredNotes = async () => {
	const { data: starredNotes } = await generateDataFromServer(
		'note/all?starred=true',
		nextProperties({})
	);
	return starredNotes?.length > 0 ? (
		<div className="grid gap-2">
			<h3 className="font-bold">Starred :</h3>
			<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
				{starredNotes?.map((note: NoteType) => (
					<NoteCard
						key={note.id}
						note={note}
					/>
				))}
			</div>
		</div>
	) : null;
};

export default StarredNotes;
