export const getError = (error: any, defaultMessage = 'Error Found') => {
	return error?.data?.message ?? defaultMessage;
};
