import { Card } from '@/components/ui/card';
import { AdminUserType } from '@/lib/helper/admin';

const UserManagementCard = ({ user }: { user: AdminUserType }) => {
	return (
		<Card className="flex flex-col gap-0.5 p-2.5 shadow shadow-light-shadow dark:shadow-dark-shadow">
			<h1>{user.name}</h1>
			<p>{user.email}</p>
		</Card>
	);
};

export default UserManagementCard;
