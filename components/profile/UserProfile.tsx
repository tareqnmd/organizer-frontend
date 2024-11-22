import { authOptions } from '@/lib/auth-options';
import { UserSessionType } from '@/lib/helper/profile';
import { getServerSession } from 'next-auth';
import UserEdit from './UserEdit';
import UserInfo from './UserInfo';

const UserProfile = async () => {
	const session: UserSessionType | null =
		await getServerSession(authOptions());
	const user = session?.user;
	return (
		<div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
			<div className="order-2 col-span-1 xl:order-1 xl:col-span-2">
				{user ? <UserEdit user={user} /> : null}
			</div>
			<div className="order-1 col-span-1 xl:order-2">
				{user ? <UserInfo user={user} /> : null}
			</div>
		</div>
	);
};

export default UserProfile;
