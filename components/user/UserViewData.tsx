import { getUserState } from '@/features/user/user-slice';
import { useSelector } from 'react-redux';

const UserViewData = () => {
	const user = useSelector(getUserState);
	return (
		<div className="flex flex-col my-3">
			<p className="text-white">Name : {user.name}</p>
			<p className="text-white">Email : {user.email}</p>
		</div>
	);
};

export default UserViewData;
