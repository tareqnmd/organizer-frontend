import BoardView from '@/components/modules/todo/boards/BoardView';

const BoardsPage = ({ params }: { params: { board: string } }) => {
	return <BoardView boardId={params.board} />;
};

export default BoardsPage;
