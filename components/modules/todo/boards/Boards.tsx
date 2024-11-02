import BoardCard from './BoardCard';

import { BoardType } from '@/lib/helper/todo';
import Link from 'next/link';

const Boards = ({ boards }: { boards: BoardType[] }) => {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
			{boards.map((board: any) => (
				<Link href={`/todo/boards/${board.id}`} key={board.id}>
					<BoardCard board={board} />
				</Link>
			))}
		</div>
	);
};

export default Boards;
