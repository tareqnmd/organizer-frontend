import { UserType } from '@/lib/helper/profile';
import { Card } from '../ui/card';

const UserInfo = ({ user }: { user: UserType }) => {
	return (
		<Card className="flex flex-col rounded-lg border border-light-border/25 p-3 shadow-sm shadow-light-shadow dark:border-dark-border/25 dark:shadow-dark-shadow">
			<p>Name : {user?.name}</p>
			<p>Email : {user?.email}</p>
			<p className="capitalize">Role : {user?.role}</p>
		</Card>
	);
};

export default UserInfo;
