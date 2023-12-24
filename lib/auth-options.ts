import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

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

export const options = {
	providers: [
		GitHubProvider({
			profile(profile: any) {
				const updated_profile = {
					...profile,
					role: check_admin(profile?.email ?? '', 'GitHub User'),
				};
				return updated_profile;
			},
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET,
		}),
		GoogleProvider({
			profile(profile) {
				const updated_profile = {
					...profile,
					id: profile.sub,
					role: check_admin(profile?.email ?? '', 'Google User'),
				};
				return updated_profile;
			},
			clientId: GOOGLE_ID,
			clientSecret: GOOGLE_SECRET,
		}),
		// CredentialsProvider({
		// 	name: 'Credentials',
		// 	credentials: {
		// 		email: {
		// 			label: 'email:',
		// 			type: 'text',
		// 			placeholder: 'your-email',
		// 		},
		// 		password: {
		// 			label: 'password:',
		// 			type: 'password',
		// 			placeholder: 'your-password',
		// 		},
		// 	},
		// 	async authorize(credentials) {
		// 		try {
		// 			const foundUser = await User.findOne({
		// 				email: credentials.email,
		// 			})
		// 				.lean()
		// 				.exec();

		// 			if (foundUser) {
		// 				console.log('User Exists');
		// 				const match = await bcrypt.compare(
		// 					credentials.password,
		// 					foundUser.password
		// 				);

		// 				if (match) {
		// 					console.log('Good Pass');
		// 					delete foundUser.password;

		// 					foundUser['role'] = 'Unverified Email';
		// 					return foundUser;
		// 				}
		// 			}
		// 		} catch (error) {
		// 			console.log(error);
		// 		}
		// 		return null;
		// 	},
		// }),
	],
	callbacks: {
		async jwt({ token, user }: any) {
			if (user) token.role = user.role;
			return token;
		},
		async session({ session, token }: any) {
			if (session?.user) session.user.role = token.role;
			return session;
		},
	},
};
