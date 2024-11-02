import { WorkspaceType } from '@/lib/helper/todo';
import Link from 'next/link';
import WorkspaceCard from './WorkspaceCard';

const Workspaces = ({ workspaces }: { workspaces: WorkspaceType[] }) => {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
			{workspaces?.map((workspace: any) => (
				<Link
					href={`/todo/workspaces/${workspace.id}`}
					key={workspace.id}
				>
					<WorkspaceCard workspace={workspace} />
				</Link>
			))}
		</div>
	);
};

export default Workspaces;
