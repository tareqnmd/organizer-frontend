import AuthContentLayout from '@/components/auth/AuthContentLayout';
import { Routes } from '@/lib/routes';

const RegistrationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Create an account"
			anotherLinkText="Already have an account?"
			anotherLink={{
				href: Routes.LOGIN_PATH,
				label: Routes.LOGIN_NAME,
			}}
		>
			{children}
		</AuthContentLayout>
	);
};

export default RegistrationLayout;
