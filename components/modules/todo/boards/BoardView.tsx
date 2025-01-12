import { ListType } from '@/lib/helper/todo';
import { generateDataFromServer, nextProperties } from '@/lib/utils';
import BoardDetails from './BoardDetails';
import BoardHeaderInfo from './BoardHeaderInfo';

const BoardView = async ({ boardId }: { boardId: string }) => {
	const { data: board } = await generateDataFromServer(
		`todo/board/${boardId}`,
		nextProperties({}),
	);
	const { data: lists = [] } = await generateDataFromServer(
		`todo/list/all?boardId=${boardId}`,
		nextProperties({}),
	);
	const { data: cards = [] } = lists.length
		? await generateDataFromServer(
				`todo/card/list-wise?listIds=${lists
					.map((list: ListType) => list.id)
					.join(',')}`,
				nextProperties({}),
			)
		: [];

	return (
		<div className="flex h-full flex-col gap-4">
			<BoardHeaderInfo board={board} />
			<BoardDetails lists={lists} cards={cards} boardId={boardId} />
		</div>
	);
};

export default BoardView;
