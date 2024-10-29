import AuthContentLayout from '@/components/auth/AuthContentLayout';
import { getRouteName, Routes } from '@/lib/routes';

const ForgotPasswordLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Forgot Password"
			socialLogin={false}
			anotherLink={{
				href: Routes.LOGIN,
				label: getRouteName('auth', Routes.LOGIN),
			}}
			anotherLinkText="Remember your password?"
		>
			{children}
		</AuthContentLayout>
	);
};

export default ForgotPasswordLayout;
