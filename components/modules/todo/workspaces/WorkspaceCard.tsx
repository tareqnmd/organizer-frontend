import { Card } from '@/components/ui/card';
import { WorkspaceType } from '@/lib/helper/todo';

const WorkspaceCard = ({ workspace }: { workspace: WorkspaceType }) => {
	return (
		<Card className="basic-card grid min-h-20 place-items-center">
			<span className="font-medium">{workspace.title}</span>
		</Card>
	);
};

export default WorkspaceCard;
