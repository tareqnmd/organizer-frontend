import { Card } from '@/components/ui/card';
import { BoardType } from '@/lib/helper/todo';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Link from 'next/link';

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
			<span className="absolute bottom-2 right-2">
				<Star
					size={16}
					className={cn(
						board.starred && 'fill-yellow-500 text-yellow-500',
					)}
				/>
			</span>
		</Card>
	);
};

export default BoardCard;
