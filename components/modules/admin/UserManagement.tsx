import { AdminUserType, UsersParamType } from '@/lib/helper/admin';
import { generateDataFromServer, nextProperties } from '@/lib/utils/fetch';
import UserManagementCard from './UserManagementCard';

const UserManagement = async ({
	searchParams,
}: {
	searchParams?: UsersParamType;
}) => {
	const queryParams = new URLSearchParams(searchParams);
	const url = `user/all?${queryParams}`;
	const { data: users } = await generateDataFromServer(
		url,
		nextProperties({}),
	);
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{users.map((user: AdminUserType) => (
				<UserManagementCard key={user.id} user={user} />
			))}
		</div>
	);
};

export default UserManagement;
