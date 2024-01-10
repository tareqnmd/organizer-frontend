import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { axiosInstance } from './fetch';
import { generateToken } from './generate-token';

const check_admin = (email: string, other_type: string) => {
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
	},
	providers: [
		GitHubProvider({
			profile(profile: any) {
				const user = {
					...profile,
					image: profile.avatar_url,
					role: check_admin(profile?.email ?? '', 'GitHub User'),
				};
				return user;
			},
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET,
		}),
		GoogleProvider({
			profile(profile) {
				const user = {
					...profile,
					id: profile.sub,
					image: profile.picture,
					role: check_admin(profile?.email ?? '', 'Google User'),
				};
				return user;
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
					const { data } = await axiosInstance.post('/login', credentials);
					if (data) {
						const user = {
							...data,
							image: data.avatar,
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
		async signIn({ user }: any) {
			await generateToken({ email: user.email });
			return true;
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
