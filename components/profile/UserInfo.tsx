import { UserType } from '@/lib/helper/profile';

const UserInfo = ({ user }: { user: UserType }) => {
	return (
		<div className="flex flex-col rounded-lg border p-3">
			<p>Name : {user?.name}</p>
			<p>Email : {user?.email}</p>
			<p className="capitalize">Role : {user?.role}</p>
		</div>
	);
};

export default UserInfo;
