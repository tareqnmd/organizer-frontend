import { generateDataFromServer, nextProperties } from '@/lib/utils';
import Boards from './boards/Boards';
import Workspaces from './workspaces/Workspaces';

const Todo = async () => {
	const { data: workspaces = [] } = await generateDataFromServer(
		'todo/workspace/all',
		nextProperties({}),
	);
	const { data: boards = [] } = await generateDataFromServer(
		'todo/board/all',
		nextProperties({}),
	);

	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-lg font-medium underline">Workspaces</h3>
			<Workspaces workspaces={workspaces} />
			<br />
			<h3 className="text-lg font-medium underline">Boards</h3>
			<Boards boards={boards} />
		</div>
	);
};

export default Todo;
