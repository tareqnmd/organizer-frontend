import Loading from '../ui/loader/Loading';

const TypeDetail = ({ type, isFetching }: any) => {
	return (
		<Loading loading={isFetching}>
			<div className="p-3 bg-[#0b2447] rounded-md shadow-md text-white grid grid-cols-2">
				<p>Type : {type?.type}</p>
				<p>Name : {type?.name}</p>
				<p>Status : {type?.status_name}</p>
			</div>
		</Loading>
	);
};

export default TypeDetail;
