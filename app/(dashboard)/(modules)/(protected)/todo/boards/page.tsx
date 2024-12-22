import BoardCreate from '@/components/modules/todo/boards/BoardCreate';
import Boards from '@/components/modules/todo/boards/Boards';
import { generateDataFromServer, nextProperties } from '@/lib/utils';

const BoardsPage = async () => {
	const { data: boards = [] } = await generateDataFromServer(
		'todo/board/all',
		nextProperties({}),
	);
	return (
		<div className="flex flex-col gap-4">
			<BoardCreate />
			<Boards boards={boards} />
		</div>
	);
};

export default BoardsPage;
