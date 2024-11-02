import Boards from '@/components/modules/todo/boards/Boards';
import { generateDataFromServer, nextProperties } from '@/lib/utils';

const BoardsPage = async () => {
	const { data: boards = [] } = await generateDataFromServer(
		'todo/board/all',
		nextProperties({}),
	);
	return <Boards boards={boards} />;
};

export default BoardsPage;
