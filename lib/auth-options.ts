import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const check_admin = (email: string) => {
	const admins = process.env.ORGANIZER_ADMINS?.split(',');
	if (admins && admins.includes(email)) {
		return true;
	}
	return false;
};

export const options = {
	providers: [
		GitHubProvider({
			profile(profile) {
				console.log('Profile GitHub: ', profile);

				let userRole = 'GitHub User';

				return {
					...profile,
					role: check_admin(profile?.email) ? 'admin' : userRole,
				};
			},
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			profile(profile) {
				console.log('Profile Google: ', profile);

				let userRole = 'Google User';
				return {
					...profile,
					id: profile.sub,
					role: userRole,
				};
			},
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
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
		async jwt({ token, user }) {
			if (user) token.role = user.role;
			return token;
		},
		async session({ session, token }) {
			if (session?.user) session.user.role = token.role;
			return session;
		},
	},
};
