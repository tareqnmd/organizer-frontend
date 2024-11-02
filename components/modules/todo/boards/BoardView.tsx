import { Card } from '@/components/ui/card';
import { ListType } from '@/lib/helper/todo/types';
import { generateDataFromServer, nextProperties } from '@/lib/utils';

const BoardView = async ({ boardId }: { boardId: string }) => {
	const { data: lists } = await generateDataFromServer(
		`todo/list/all?boardId=${boardId}`,
		nextProperties({}),
	);
	return (
		<div className="flex gap-2">
			{lists.map((list: ListType) => (
				<Card className="basic-card w-[200px]" key={list.id}>
					{list.title}
				</Card>
			))}
		</div>
	);
};

export default BoardView;
