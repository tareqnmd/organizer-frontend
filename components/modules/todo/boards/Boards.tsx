import BoardCard from './BoardCard';

import Link from 'next/link';

const Boards = ({ boards }: any) => {
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
			{boards.map((board: any) => (
				<Link
					href={`/todo/boards/${board.id}`}
					key={board.id}
				>
					<BoardCard board={board} />
				</Link>
			))}
		</div>
	);
};

export default Boards;
