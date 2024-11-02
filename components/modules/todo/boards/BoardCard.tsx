import { Card } from '@/components/ui/card';
import { BoardType } from '@/lib/helper/todo';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Link from 'next/link';
import BoardDelete from './BoardDelete';
import BoardEdit from './BoardEdit';

const BoardCard = ({ board }: { board: BoardType }) => {
	return (
		<Card
			className={cn(
				'basic-card relative min-h-[100px] rounded-md border p-2 active:scale-100',
			)}
			style={{
				backgroundColor: board.boardBg ?? '',
			}}
		>
			<Link href={`/todo/boards/${board.id}`} key={board.id}>
				<span className="font-medium">{board.title}</span>
			</Link>
			<div className="absolute bottom-3 right-3 flex items-center gap-2">
				<BoardEdit board={board} />
				<BoardDelete board={board} />
				<Star
					size={16}
					className={cn(
						board.starred && 'fill-yellow-500 text-yellow-500',
					)}
				/>
			</div>
		</Card>
	);
};

export default BoardCard;
