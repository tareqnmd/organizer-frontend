import { Card } from '@/components/ui/card';
import { WorkspaceType } from '@/lib/helper/todo';
import WorkspaceCard from './WorkspaceCard';

const Workspaces = ({ workspaces }: { workspaces: WorkspaceType[] }) => {
	return (
		<>
			{workspaces?.length > 0 ? (
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{workspaces?.map((workspace: WorkspaceType) => (
						<WorkspaceCard
							key={workspace.id}
							workspace={workspace}
						/>
					))}
				</div>
			) : (
				<Card className="basic-card relative grid min-h-[80px] place-content-center active:scale-100">
					No workspaces found
				</Card>
			)}
		</>
	);
};

export default Workspaces;
