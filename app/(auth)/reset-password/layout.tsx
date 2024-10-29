import AuthContentLayout from '@/components/auth/AuthContentLayout';
import { getRouteName, Routes } from '@/lib/routes';

const ResetPasswordLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Reset Password"
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

export default ResetPasswordLayout;
