import Boards from '@/components/modules/todo/boards/Boards';
const BOARDS = [
	{
		id: 1,
		workspaceId: 1,
		name: 'Board 1',
		starred: false,
		bg: 'bg-red-500',
		visibility: 'public',
		status: 'active',
	},
	{
		id: 2,
		workspaceId: 1,
		name: 'Board 2',
		starred: true,
		bg: 'bg-blue-500',
		visibility: 'public',
		status: 'active',
	},
	{
		id: 3,
		workspaceId: 2,
		name: 'Board 3',
		starred: false,
		bg: 'bg-green-500',
		visibility: 'public',
		status: 'active',
	},
];

const getBoards = async (workspaceId: string) => {
	try {
		const data = BOARDS.filter((board) => board.workspaceId === +workspaceId);
		return data;
	} catch (error) {
		return [];
	}
};

const page = async ({ params }: { params: { workspace: string } }) => {
	const data = await getBoards(params.workspace);
	return <Boards boards={data} />;
};

export default page;
