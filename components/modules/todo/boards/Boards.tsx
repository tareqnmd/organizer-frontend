import BoardCard from './BoardCard';

import { BoardType } from '@/lib/helper/todo';

const Boards = ({ boards }: { boards: BoardType[] }) => {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
			{boards.map((board: any) => (
				<BoardCard key={board.id} board={board} />
			))}
		</div>
	);
};

export default Boards;
