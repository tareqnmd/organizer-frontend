import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';

const useAuthCheck = () => {
	const dispatch = useDispatch();
	const [authChecked, setAuthChecked] = useState(false);
	useEffect(() => {
		const localAuth = localStorage.getItem('user');
		if (localAuth) {
			const user = JSON.parse(localAuth);
			if (user?.username && user?.fullName) {
				dispatch(
					setUser({
						fullName: user.fullName,
						username: user.username,
					})
				);
			}
		}
		setAuthChecked(true);
	}, [authChecked, dispatch]);

	return authChecked;
};

export default useAuthCheck;
