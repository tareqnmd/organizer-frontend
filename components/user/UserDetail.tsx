import Loading from '../ui/loader/Loading';

const UserDetail = ({ user, isFetching }: any) => {
	return (
		<Loading loading={isFetching}>
			<div className="p-3 bg-[#0b2447] rounded-md shadow-md text-white grid grid-cols-2">
				<p>Name : {user?.name}</p>
				<p>Email : {user?.email}</p>
				<p>Role : {user?.role_name}</p>
				<p>Status : {user?.status_name}</p>
			</div>
		</Loading>
	);
};

export default UserDetail;
