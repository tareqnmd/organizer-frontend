import { axiosInstance } from '@/lib/utils';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const {
	GITHUB_ID = '',
	GITHUB_SECRET = '',
	GOOGLE_SECRET = '',
	GOOGLE_ID = '',
} = process.env;

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
			credentials: {
				name: {
					label: 'Name:',
					type: 'text',
					placeholder: 'Your Name',
				},
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
					user.token = userData.token;
					user.refreshToken = userData.refreshToken;
					return true;
				}
				return false;
			} else {
				return true;
			}
		},
		async jwt({ token, trigger, session, user }) {
			if (user) {
				token = {
					...user,
					iat: token.iat,
					exp: token.exp,
					jti: token.jti,
				};
			}
			if (trigger === 'update' && session?.name) {
				token.name = session.name;
			}
			return token;
		},
		async session({ session, token }) {
			const { iat, exp, jti, ...rest } = token;
			return { expires: session.expires, user: rest };
		},
	},
} satisfies NextAuthOptions;
