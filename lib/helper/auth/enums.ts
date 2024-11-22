export enum AuthTypeEnum {
	LOGIN = 'login',
	REGISTER = 'register',
	FORGOT_PASSWORD = 'forgot_password',
	RESET_PASSWORD = 'reset_password',
}

export enum AuthErrorEnum {
	REFRESH_ACCESS_TOKEN_ERROR = 'RefreshAccessTokenError',
	FORCE_REFRESH_QUERY_PARAM = 'forceRefreshQuery',
	UNAUTHORIZED = 'Unauthorized',
	INVALID_CREDENTIALS = 'Invalid credentials',
}
