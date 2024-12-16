import WorkspaceCreate from '@/components/modules/todo/workspaces/WorkspaceCreate';
import Workspaces from '@/components/modules/todo/workspaces/Workspaces';
import { generateDataFromServer, nextProperties } from '@/lib/utils';

const WorkspacesPage = async () => {
	const { data: workspaces = [] } = await generateDataFromServer(
		'todo/workspace/all',
		nextProperties({}),
	);
	return (
		<div className="flex flex-col gap-4">
			<WorkspaceCreate />
			<Workspaces workspaces={workspaces} />
		</div>
	);
};

export default WorkspacesPage;
