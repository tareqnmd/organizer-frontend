export const getUserItem = () => {
	const localUser = localStorage.getItem('user');
	if (localUser) {
		const userData = JSON.parse(localUser);
		return {
			name: userData?.name,
			email: userData?.email,
			userId: userData?.userId,
		};
	} else {
		return {
			name: null,
			email: null,
			userId: null,
		};
	}
};
