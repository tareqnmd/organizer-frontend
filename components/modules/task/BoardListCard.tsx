const BoardListCard = ({ card }: { card: any }) => {
	return (
		<div
			key={card.id}
			className="border shadow rounded p-2"
		>
			{card?.title ?? ''}
		</div>
	);
};

export default BoardListCard;
