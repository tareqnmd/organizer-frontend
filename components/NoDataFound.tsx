const NoDataFound = ({ message = 'No Data Found' }) => {
	return (
		<div className="bg-[white] p-3 text-center rounded text-2xl font-semibold">
			{message}
		</div>
	);
};

export default NoDataFound;
