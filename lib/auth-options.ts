import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { cookies } from 'next/headers';
import { axiosInstance } from './fetch';

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
			profile(profile: any) {
				return {
					id: String(profile.id),
					email: profile.email,
					image: profile.avatar_url,
					name: profile.name,
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
				};
			},
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
					const { data } = await axiosInstance.post('/user/login', credentials);
					const { token, tokenOptions, ...user } = data;
					cookies().set('token', token, JSON.parse(tokenOptions));
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
					const { data } = await axiosInstance.post('/user/register', credentials);
					const { token, tokenOptions, ...user } = data;
					cookies().set('token', token, JSON.parse(tokenOptions));
					return user ?? null;
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
				const { token, tokenOptions, ...userData } = data;
				if (data) {
					user.id = userData.id;
					user.email = userData.email;
					user.name = userData.name;
					user.image = userData.image;
					user.role = userData.role;
					user.status = userData.status;
					cookies().set('token', token, JSON.parse(tokenOptions));
					return true;
				}
				return false;
			} else {
				return true;
			}
		},
		async jwt({ token, user }: any) {
			if (user) {
				token = { ...user, iat: token.iat, exp: token.exp, jti: token.jti };
			}
			return token;
		},
		async session({ session, token }: any) {
			const { iat, exp, jti, ...rest } = token;
			return { expires: session.expires, user: rest };
		},
	},
};
