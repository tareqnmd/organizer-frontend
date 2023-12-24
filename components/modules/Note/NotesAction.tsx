import Link from 'next/link';

const NotesAction = () => {
	return (
		<div className="flex item-center justify-end gap-2 mb-3">
			<Link
				className="border rounded px-3 py-1 text-sm"
				href="/note/all"
			>
				All
			</Link>
			<Link
				className="border rounded px-3 py-1 text-sm"
				href="/note/all?pinned=1"
			>
				Pinned
			</Link>
		</div>
	);
};

export default NotesAction;
