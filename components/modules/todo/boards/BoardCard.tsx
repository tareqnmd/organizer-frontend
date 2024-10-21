import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

const BoardCard = ({ board }: any) => {
	return (
		<div
			className={cn(
				'border p-2 rounded-md text-white min-h-[100px] relative',
				board.bg,
				board.status === 'active' && 'cursor-pointer'
			)}
		>
			<strong>{board.name} </strong>
			<span className="absolute bottom-2 right-2">
				<Star
					size={16}
					className={cn(board.starred && 'text-yellow-500 fill-yellow-500')}
				/>
			</span>
		</div>
	);
};

export default BoardCard;
