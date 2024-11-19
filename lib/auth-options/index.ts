import { axiosInstance } from '@/lib/utils';
import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const {
	GITHUB_ID = '',
	GITHUB_SECRET = '',
	GOOGLE_SECRET = '',
	GOOGLE_ID = '',
} = process.env;

const refreshAccessToken = async (token: any) => {
	try {
		const { data: user } = await axiosInstance.post('/user/refresh-token', {
			refreshToken: token.refreshToken,
		});
		return {
			...token,
			accessToken: user.accessToken,
			refreshToken: user.refreshToken,
			accessTokenExpiry: user.accessTokenExpiry,
		};
	} catch (error) {
		return {};
	}
};

export const authOptions = {
	pages: {
		signIn: '/login',
		error: '/login',
	},
	providers: [
		GitHubProvider({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: GOOGLE_ID,
			clientSecret: GOOGLE_SECRET,
		}),
		CredentialsProvider({
			id: 'login',
			name: 'Login',
			credentials: {},
			async authorize(credentials) {
				try {
					const { data: user } = await axiosInstance.post(
						'/user/login',
						credentials,
					);
					return user ?? null;
				} catch (error) {
					return null;
				}
			},
		}),
		CredentialsProvider({
			id: 'register',
			name: 'Register',
			credentials: {},
			async authorize(credentials) {
				try {
					const { data: user } = await axiosInstance.post(
						'/user/register',
						credentials,
					);
					return user ?? null;
				} catch (error) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account }) {
			if (
				account?.provider &&
				['google', 'github'].includes(account.provider)
			) {
				const { data: userData } = await axiosInstance.post(
					'/user/social-auth',
					{
						token:
							account.provider === 'google'
								? account.id_token
								: account.access_token,
						from: account.provider,
					},
				);
				if (userData) {
					user.id = userData.id;
					user.email = userData.email;
					user.name = userData.name;
					user.image = userData.image;
					user.role = userData.role;
					user.status = userData.status;
					user.accessToken = userData.accessToken;
					user.refreshToken = userData.refreshToken;
					user.accessTokenExpiry = userData.accessTokenExpiry;
					return true;
				}
				return false;
			} else {
				return true;
			}
		},
		async jwt({ token, trigger, session, user }) {
			if (user) {
				token.accessToken = user.accessToken;
				token.refreshToken = user.refreshToken;
				token.accessTokenExpiry = user.accessTokenExpiry;
				token.user = {
					id: user.id,
					email: user.email,
					name: user.name,
					image: user.image,
					role: user.role,
					status: user.status,
				};
			}
			if (trigger === 'update' && session?.name) {
				token.name = session.name;
			}

			if (Date.now() < (token.accessTokenExpiry as number)) {
				return token;
			}
			const refreshedToken = await refreshAccessToken(token);
			return refreshedToken;
		},
		async session({ session, token }) {
			if (token) {
				session.user = token.user as User;
				session.accessToken = token.accessToken;
				session.accessTokenExpiry = token.accessTokenExpiry;
				session.refreshToken = token.refreshToken;
				session.error = token.error;
			}
			return session;
		},
	},
} satisfies NextAuthOptions;
