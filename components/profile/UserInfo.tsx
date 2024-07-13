const UserInfo = ({ user }: any) => {
	return (
		<div className="flex flex-col rounded-lg p-3 border">
			<p>Name : {user?.name}</p>
			<p>Email : {user?.email}</p>
			<p className="capitalize">Role : {user?.role}</p>
		</div>
	);
};

export default UserInfo;
