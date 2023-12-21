import Link from 'next/link';

const NotesAction = () => {
	return (
		<div className="flex item-center justify-end mb-3">
			<Link
				className="border rounded px-2"
				href="/note/all?pinned=1"
			>
				Pinned
			</Link>
		</div>
	);
};

export default NotesAction;
