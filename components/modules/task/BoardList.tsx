import BoardListCard from './BoardListCard';

const BoardList = ({ list }: any) => {
	return (
		<div
			key={list.id}
			className="border shadow rounded p-2 w-[280px]"
		>
			{list?.title ?? ''}
			<div className="flex flex-col gap-2">
				{list?.cards.map((card: any) => (
					<BoardListCard
						key={card.id}
						card={card}
					/>
				))}
			</div>
		</div>
	);
};

export default BoardList;
