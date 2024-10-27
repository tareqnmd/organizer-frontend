import AuthContentLayout from '@/components/auth/AuthContentLayout';
import { getRouteName, Routes } from '@/lib/routes';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Welcome"
			anotherLink={{
				href: Routes.REGISTER,
				label: getRouteName('auth', Routes.REGISTER),
			}}
			anotherLinkText="Don't have an account?"
		>
			{children}
		</AuthContentLayout>
	);
};

export default LoginLayout;
