import { BoardWorkspaceType } from '@/lib/helper/todo';
import { baseDateFormat } from '@/lib/utils';
import BoardCreate from '../boards/BoardCreate';

const WorkspaceDetails = ({
	boardWorkspace,
}: {
	boardWorkspace: BoardWorkspaceType;
}) => {
	return (
		<div className="flex items-center justify-between border-b py-2 text-lg font-bold">
			<div>
				{boardWorkspace.workspaceTitle}
				<div className="text-sm text-gray-500">
					created by{' '}
					{baseDateFormat(boardWorkspace.workspaceCreatedAt)}
				</div>
			</div>
			<BoardCreate workspaceId={boardWorkspace.workspaceId} />
		</div>
	);
};

export default WorkspaceDetails;
