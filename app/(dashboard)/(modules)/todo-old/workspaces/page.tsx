import Workspaces from '@/components/modules/todo/workspaces/Workspaces';

const workspaces = [
	{
		id: 1,
		name: 'Workspace 1',
	},
	{
		id: 2,
		name: 'Workspace 2',
	},
];

const page = () => {
	return <Workspaces workspaces={workspaces} />;
};

export default page;
