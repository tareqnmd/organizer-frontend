import { ListType } from '@/lib/helper/todo';
import { generateDataFromServer, nextProperties } from '@/lib/utils';
import BoardDetails from './BardDetails';
import BoardDnDContent from './BoardDnDContent';

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
		<>
			<div
				className="absolute inset-0 !bg-cover !bg-center !bg-no-repeat"
				style={{ backgroundImage: board?.boardBg }}
			></div>
			<div className="flex h-full flex-col gap-4">
				<BoardDetails board={board} />
				<BoardDnDContent
					boardId={boardId}
					lists={lists}
					cards={cards}
				/>
			</div>
		</>
	);
};

export default BoardView;
