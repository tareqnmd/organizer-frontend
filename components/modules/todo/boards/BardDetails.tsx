import { BoardType } from '@/lib/helper/todo';
import { baseDateFormat } from '@/lib/utils';

const BoardDetails = ({ board }: { board: BoardType }) => {
	return (
		<div className="z-10 flex flex-col border-b py-2 text-lg font-bold text-white">
			{board?.title}
			<div className="text-sm text-gray-300">
				created by {baseDateFormat(board?.createdAt)}
			</div>
		</div>
	);
};

export default BoardDetails;
