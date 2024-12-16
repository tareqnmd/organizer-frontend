import AuthContentLayout from '@/components/auth/AuthContentLayout';
import { Routes } from '@/lib/routes';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Welcome"
			anotherLink={{
				href: Routes.REGISTER_PATH,
				label: Routes.REGISTER_NAME,
			}}
			anotherLinkText="Don't have an account?"
		>
			{children}
		</AuthContentLayout>
	);
};

export default LoginLayout;
