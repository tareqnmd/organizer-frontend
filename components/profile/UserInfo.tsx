const UserInfoData = ({ user }: any) => {
	return (
		<div className="flex flex-col rounded-lg p-3 bg-[#0B2447] relative">
			<p className="text-white">Name : {user.name}</p>
			<p className="text-white">Email : {user.email}</p>
			<p className="text-white">Role : {user.role_name}</p>
			<p className="text-white">Status : {user.status_name}</p>
		</div>
	);
};

export default UserInfoData;
