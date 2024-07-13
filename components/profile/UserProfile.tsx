import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import UserEdit from './UserEdit';
import UserInfo from './UserInfo';

const UserProfile = async () => {
	const session: any = await getServerSession(authOptions);
	const user = session?.user;
	return (
		<div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
			<div className="order-2 xl:order-1 col-span-1 xl:col-span-2">
				<UserEdit user={user} />
			</div>
			<div className="order-1 xl:order-2  col-span-1">
				<UserInfo user={user} />
			</div>
		</div>
	);
};

export default UserProfile;
