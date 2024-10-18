import Todo from '@/components/modules/todo/Todo';

const getDashboardData = async () => {
	const data = {
		workspaces: [
			{
				id: 1,
				name: 'Workspace 1',
			},
			{
				id: 2,
				name: 'Workspace 2',
			},
		],
		boards: [
			{
				id: 1,
				workspaceId: 1,
				name: 'Board 1',
				starred: false,
				bg: 'bg-red-500',
				visibility: 'public',
				status: 'active',
			},
		],
	};
	return data;
};

const page = async () => {
	const data = await getDashboardData();
	return <Todo data={data} />;
};

export default page;
