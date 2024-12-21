import BoardView from '@/components/modules/todo/boards/BoardView';

const BoardDetailPage = ({ params }: { params: { board: string } }) => {
	return <BoardView boardId={params.board} />;
};

export default BoardDetailPage;
