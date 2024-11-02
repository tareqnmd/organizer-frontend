import Workspaces from '@/components/modules/todo/workspaces/Workspaces';
import { generateDataFromServer, nextProperties } from '@/lib/utils';

const WorkspacesPage = async () => {
	const { data: workspaces = [] } = await generateDataFromServer(
		'todo/workspace/all',
		nextProperties({}),
	);
	return <Workspaces workspaces={workspaces} />;
};

export default WorkspacesPage;
