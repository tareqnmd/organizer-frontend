'use client';
import { Badge, Github } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { Button } from '../ui/button';
import Google from '../icons/Google';

const LoginSocialActions = () => {
	return (
		<div className="grid grid-cols-2 gap-2  w-full">
			<Button
				className="gap-2"
				onClick={() =>
					signIn('google', {
						callbackUrl: `${window.location.origin}`,
					})
				}
			>
				<Google />
				Google
			</Button>
			<Button
				className="gap-2"
				onClick={() =>
					signIn('github', {
						callbackUrl: `${window.location.origin}`,
					})
				}
			>
				<Github />
				Github
			</Button>
		</div>
	);
};

export default LoginSocialActions;
