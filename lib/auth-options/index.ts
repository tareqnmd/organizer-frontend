import { axiosInstance, baseAxiosInstance } from '@/lib/utils';
import { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { AuthErrorEnum } from '../helper/auth';

const {
	GITHUB_ID = '',
	GITHUB_SECRET = '',
	GOOGLE_SECRET = '',
	GOOGLE_ID = '',
} = process.env;

const refreshAccessToken = async (token: any) => {
	if (token?.refreshToken) {
		try {
			const {
				data: { data: user },
			} = await baseAxiosInstance.post('/user/refresh-token', {
				refreshToken: token.refreshToken,
			});
			const newToken = {
				...token,
				accessToken: user.accessToken,
				refreshToken: user.refreshToken,
				accessTokenExpiry: user.accessTokenExpiry,
			};
			return newToken;
		} catch (error) {
			return {
				...token,
				error: AuthErrorEnum.REFRESH_ACCESS_TOKEN_ERROR,
			};
		}
	} else {
		return { ...token, error: AuthErrorEnum.REFRESH_ACCESS_TOKEN_ERROR };
	}
};

export const authOptions = (query?: { [key: string]: string | string[] }) => {
	return {
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
					} catch (error: any) {
						throw new Error(error.message);
					}
				},
			}),
		],
		callbacks: {
			async signIn({ user, account }: any) {
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
			async jwt({ token, trigger, session, user }: any) {
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
				const forceRefreshQuery =
					query?.[AuthErrorEnum.FORCE_REFRESH_QUERY_PARAM] === 'true';
				if (
					Date.now() < (token.accessTokenExpiry as number) &&
					!forceRefreshQuery
				) {
					return token;
				}
				return refreshAccessToken(token);
			},
			async session({ session, token }: any) {
				session.user = token?.user as User;
				session.accessToken = token?.accessToken ?? null;
				session.error = token?.error ?? null;
				return session;
			},
		},
	};
};
