import { ListType } from '@/lib/helper/todo';
import { generateDataFromServer, nextProperties } from '@/lib/utils';
import TestTodo from '../test/TestTodo';
import BoardDetails from './BardDetails';

const BoardView = async ({ boardId }: { boardId: string }) => {
	const { data: board } = await generateDataFromServer(
		`todo/board/${boardId}`,
		nextProperties({}),
	);
	const { data: lists = [] } = await generateDataFromServer(
		`todo/list/all?boardId=${boardId}`,
		nextProperties({}),
	);
	const { data: cards = [] } = await generateDataFromServer(
		`todo/card/list-wise?listIds=${lists
			.map((list: ListType) => list.id)
			.join(',')}`,
		nextProperties({}),
	);

	return (
		<div className="flex h-full flex-col gap-4">
			<BoardDetails board={board} />
			<TestTodo lists={lists} cards={cards} boardId={boardId} />
			{/* <BoardDnDContent boardId={boardId} lists={lists} cards={cards} /> */}
		</div>
	);
};

export default BoardView;
