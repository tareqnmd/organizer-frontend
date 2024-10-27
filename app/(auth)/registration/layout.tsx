import AuthContentLayout from '@/components/auth/AuthContentLayout';
import { getRouteName, Routes } from '@/lib/routes';

const RegistrationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Create an account"
			anotherLinkText="Already have an account?"
			anotherLink={{
				href: Routes.LOGIN,
				label: getRouteName('auth', Routes.LOGIN),
			}}
		>
			{children}
		</AuthContentLayout>
	);
};

export default RegistrationLayout;
