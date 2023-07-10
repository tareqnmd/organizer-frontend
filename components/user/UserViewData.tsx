import { getUserState } from '@/features/user/user-slice';
import { useSelector } from 'react-redux';

const UserViewData = () => {
	const user = useSelector(getUserState);
	return (
		<div className="flex flex-col rounded p-3 bg-[#0B2447]">
			<p className="text-white">Name : {user.name}</p>
			<p className="text-white">Email : {user.email}</p>
			<p className="text-white">Role : {user.role}</p>
		</div>
	);
};

export default UserViewData;
