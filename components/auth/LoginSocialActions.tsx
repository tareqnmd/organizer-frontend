'use client';
import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Google from '../icon/GoogleIcon';
import { Button } from '../ui/button';

const LoginSocialActions = () => {
	const socialLogin = async (type: string) => {
		await signIn(type, {
			redirect: false,
		});
	};
	return (
		<div className="grid grid-cols-2 gap-2  w-full">
			<Button
				className="gap-2"
				onClick={() => socialLogin('google')}
			>
				<Google />
				Google
			</Button>
			<Button
				className="gap-2"
				onClick={() => socialLogin('github')}
			>
				<Github />
				Github
			</Button>
		</div>
	);
};

export default LoginSocialActions;
