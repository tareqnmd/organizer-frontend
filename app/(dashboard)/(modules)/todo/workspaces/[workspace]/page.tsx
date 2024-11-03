import WorkspaceView from '@/components/modules/todo/workspaces/WorkspaceView';

const WorkspacesPage = ({ params }: { params: { workspace: string } }) => {
	return <WorkspaceView workspaceId={params.workspace} />;
};

export default WorkspacesPage;
