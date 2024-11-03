import { generateDataFromServer, nextProperties } from '@/lib/utils';
import BoardList from '../list/BoardList';
import BoardDetails from './BoardDetails';

const BoardView = async ({ boardId }: { boardId: string }) => {
	const { data: lists } = await generateDataFromServer(
		`todo/list/all?boardId=${boardId}`,
		nextProperties({}),
	);
	const { data: board } = await generateDataFromServer(
		`todo/board/${boardId}`,
		nextProperties({}),
	);

	return (
		<div className="flex flex-col gap-4">
			<BoardDetails board={board} />
			<BoardList lists={lists} />
		</div>
	);
};

export default BoardView;
