import { cn } from '@/lib/utils';
import Link from 'next/link';
import { NotesParamType } from './AllNotes';

const NotesAction = ({ params }: { params: NotesParamType }) => {
	return (
		<div className="flex item-center justify-end gap-2 mb-3">
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					Object.keys(params).length === 0 && 'border-gray-950'
				)}
				href="/note/all"
			>
				All
			</Link>
			<Link
				className={cn(
					'border rounded px-3 py-1 text-sm',
					params?.pinned === '1' && 'border-gray-950'
				)}
				href="/note/all?pinned=1"
			>
				Pinned
			</Link>
		</div>
	);
};

export default NotesAction;
