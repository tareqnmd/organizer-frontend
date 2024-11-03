import { WorkspaceType } from '@/lib/helper/todo';
import { baseDateFormat } from '@/lib/utils';
import BoardCreate from '../boards/BoardCreate';

const WorkspaceDetails = ({ workspace }: { workspace: WorkspaceType }) => {
	return (
		<div className="flex items-center justify-between border-b py-2 text-lg font-bold">
			<div>
				{workspace.title}
				<div className="text-sm text-gray-500">
					created by {baseDateFormat(workspace.createdAt)}
				</div>
			</div>
			<BoardCreate workspaceId={workspace.id} />
		</div>
	);
};

export default WorkspaceDetails;
