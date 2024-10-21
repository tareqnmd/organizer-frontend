import Boards from '@/components/modules/todo/boards/Boards';

const getBoards = async () => {
	try {
		const data = [
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
		return data;
	} catch (error) {
		return [];
	}
};

const page = async () => {
	const data = await getBoards();
	return <Boards boards={data} />;
};

export default page;
