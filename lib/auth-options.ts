import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { axiosInstance } from './fetch';

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
					const { data: user } = await axiosInstance.post(
						'/user/login',
						credentials
					);
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
				if (data) {
					user.id = data.id;
					user.email = data.email;
					user.name = data.name;
					user.image = data.image;
					user.role = data.role;
					user.status = data.status;
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
