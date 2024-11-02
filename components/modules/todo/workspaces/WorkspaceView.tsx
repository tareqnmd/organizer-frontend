import { generateDataFromServer, nextProperties } from '@/lib/utils';
import Boards from '../boards/Boards';
import WorkspaceDetails from './WorkspaceDetails';

const WorkspaceView = async ({ workspaceId }: { workspaceId: string }) => {
	const { data: boards } = await generateDataFromServer(
		`todo/board/all?workspaceId=${workspaceId}`,
		nextProperties({}),
	);
	return (
		<div className="flex flex-col gap-4">
			<WorkspaceDetails boardWorkspace={boards[0]} />
			<Boards boards={boards} />
		</div>
	);
};

export default WorkspaceView;
