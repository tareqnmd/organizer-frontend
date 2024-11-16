import { Card } from '@/components/ui/card';
import BoardCard from './BoardCard';

import { BoardType } from '@/lib/helper/todo';

const Boards = ({ boards }: { boards: BoardType[] }) => {
	return (
		<>
			{boards?.length > 0 ? (
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{boards?.map((board: any) => (
						<BoardCard key={board.id} board={board} />
					))}
				</div>
			) : (
				<Card className="basic-card relative grid min-h-[80px] place-content-center active:scale-100">
					No boards found
				</Card>
			)}
		</>
	);
};

export default Boards;
