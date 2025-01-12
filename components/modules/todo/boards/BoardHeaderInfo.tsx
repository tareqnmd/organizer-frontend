import { BoardType } from '@/lib/helper/todo';
import { baseDateFormat } from '@/lib/utils';

const BoardHeaderInfo = ({ board }: { board: BoardType }) => {
	return (
		<div
			className="z-10 flex flex-col rounded bg-cover bg-center bg-no-repeat px-2 py-4 text-lg font-bold text-white"
			style={{ backgroundImage: board?.boardBg }}
		>
			{board?.title}
			<div className="text-sm text-gray-300">
				created by {baseDateFormat(board?.createdAt)}
			</div>
		</div>
	);
};

export default BoardHeaderInfo;
