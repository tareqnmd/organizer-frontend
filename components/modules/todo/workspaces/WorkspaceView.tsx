import { generateDataFromServer, nextProperties } from '@/lib/utils';
import Boards from '../boards/Boards';

const WorkspaceView = async ({ workspaceId }: { workspaceId: string }) => {
	const { data: boards } = await generateDataFromServer(
		`todo/board/all?workspaceId=${workspaceId}`,
		nextProperties({}),
	);
	return <Boards boards={boards} />;
};

export default WorkspaceView;
