import Boards from './boards/Boards';
import Workspaces from './workspaces/Workspaces';

const Todo = ({ data }: any) => {
	const { workspaces, boards } = data;
	return (
		<div>
			<h1 className="text-xl font-bold mb-1">Workspaces</h1>
			<Workspaces workspaces={workspaces} />
			<br />
			<h1 className="text-xl font-bold mb-1">Boards</h1>
			<Boards boards={boards} />
		</div>
	);
};

export default Todo;
