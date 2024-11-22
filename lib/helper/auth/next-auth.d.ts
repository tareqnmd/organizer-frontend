import 'next-auth';

declare module 'next-auth' {
	interface User {
		id: string;
		email: string;
		name: string;
		image?: string;
		role?: string;
		status?: string;
		accessToken?: string;
		refreshToken?: string;
		accessTokenExpiry?: number;
	}
	interface Session {
		user: User;
		accessToken?: any;
		refreshToken?: any;
		accessTokenExpiry?: any;
		error?: any;
	}
}
