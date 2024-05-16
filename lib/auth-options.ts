import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { axiosInstance } from './fetch';

const check_admin = (email: string, other_type = 'standard') => {
	const admins = process.env.ORGANIZER_ADMINS?.split(',');
	if (admins && admins.includes(email)) {
		return 'admin';
	}
	return other_type;
};

const {
	GITHUB_ID = '',
	GITHUB_SECRET = '',
	GOOGLE_SECRET = '',
	GOOGLE_ID = '',
} = process.env;

export const auth_options = {
	pages: {
		signIn: '/login',
		error: '/login',
	},
	providers: [
		GitHubProvider({
			profile(profile: any) {
				return {
					id: String(profile.id),
					email: profile.email,
					image: profile.avatar_url,
					name: profile.name,
					role: check_admin(profile?.email),
				};
			},
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET,
		}),
		GoogleProvider({
			profile(profile) {
				return {
					id: String(profile.sub),
					email: profile.email,
					image: profile.picture,
					name: profile.name,
					role: check_admin(profile?.email),
				};
			},
			clientId: GOOGLE_ID,
			clientSecret: GOOGLE_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email:',
					type: 'email',
					placeholder: 'Your Email',
				},
				password: {
					label: 'Password:',
					type: 'password',
					placeholder: 'Your Password',
				},
			},
			async authorize(credentials) {
				try {
					const { data } = await axiosInstance.post('/user/login', credentials);
					if (data) {
						const user = {
							...data,
							role: check_admin(data?.email ?? '', 'Credential User'),
						};
						return user;
					} else {
						return null;
					}
				} catch (error) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account }: any) {
			if (['google', 'github'].includes(account.provider)) {
				const { data } = await axiosInstance.post('/user/social-auth', {
					...user,
					from: account.provider,
				});
				if (data) {
					return true;
				}
				return false;
			} else {
				return true;
			}
		},
		async jwt({ token, user }: any) {
			if (user) {
				token.role = user.role;
			}
			return token;
		},
		async session({ session, token }: any) {
			if (session?.user) {
				session.user.role = token.role;
			}
			return session;
		},
	},
};
