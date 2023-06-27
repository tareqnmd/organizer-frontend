export const getUserItem = () => {
	const localUser =
		typeof window !== 'undefined' ? localStorage.getItem('user') : null;
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

export const getError = (error: any, defaultMessage = 'Error Found') => {
	return error?.data?.message ?? defaultMessage;
};
