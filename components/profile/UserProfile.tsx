import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import UserEdit from './UserEdit';
import UserInfo from './UserInfo';

const UserProfile = async () => {
	const session: any = await getServerSession(authOptions);
	const user = session?.user;
	return (
		<div className="grid gap-6 grid-cols-3">
			<div className="col-span-2">
				<UserEdit user={user} />
			</div>
			<div className="col-span-1">
				<UserInfo user={user} />
			</div>
		</div>
	);
};

export default UserProfile;
