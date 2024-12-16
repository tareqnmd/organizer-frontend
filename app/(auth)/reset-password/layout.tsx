import AuthContentLayout from '@/components/auth/AuthContentLayout';
import { Routes } from '@/lib/routes';

const ResetPasswordLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Reset Password"
			socialLogin={false}
			anotherLink={{
				href: Routes.LOGIN_PATH,
				label: Routes.LOGIN_NAME,
			}}
			anotherLinkText="Remember your password?"
		>
			{children}
		</AuthContentLayout>
	);
};

export default ResetPasswordLayout;
