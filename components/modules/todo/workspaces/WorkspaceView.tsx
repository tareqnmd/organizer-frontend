import { generateDataFromServer, nextProperties } from '@/lib/utils';
import Workspaces from './Workspaces';

const WorkspaceView = async ({ workspaceId }: { workspaceId: string }) => {
	const { data: workspaces } = await generateDataFromServer(
		`todo/board/all?workspaceId=${workspaceId}`,
		nextProperties({}),
	);
	return <Workspaces workspaces={workspaces} />;
};

export default WorkspaceView;
