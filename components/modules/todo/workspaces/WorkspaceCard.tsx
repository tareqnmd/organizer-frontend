import { Card } from '@/components/ui/card';
import { WorkspaceType } from '@/lib/helper/todo';
import Link from 'next/link';
import WorkspaceDelete from './WorkspaceDelete';
import WorkspaceEdit from './WorkspaceEdit';

const WorkspaceCard = ({ workspace }: { workspace: WorkspaceType }) => {
	return (
		<Card className="basic-card relative min-h-[80px] active:scale-100">
			<Link href={`/todo/workspaces/${workspace.id}`}>
				<span className="break-words font-medium">
					{workspace.title}
				</span>
			</Link>
			<div className="absolute bottom-3 right-3 flex items-center gap-2 bg-background-light dark:bg-background-dark">
				<WorkspaceEdit workspace={workspace} />
				<WorkspaceDelete workspace={workspace} />
			</div>
		</Card>
	);
};

export default WorkspaceCard;
