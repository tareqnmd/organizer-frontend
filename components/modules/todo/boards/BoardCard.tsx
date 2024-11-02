import { Card } from '@/components/ui/card';
import { BoardType } from '@/lib/helper/todo';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

const BoardCard = ({ board }: { board: BoardType }) => {
	return (
		<Card
			className={cn(
				'basic-card relative min-h-[100px] rounded-md border p-2',
			)}
			style={{
				backgroundColor: board.boardBg ?? '',
			}}
		>
			<span className="font-medium">{board.title}</span>
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
