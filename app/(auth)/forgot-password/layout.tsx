import AuthContentLayout from '@/components/auth/AuthContentLayout';
import { Routes } from '@/lib/routes';

const ForgotPasswordLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Forgot Password"
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

export default ForgotPasswordLayout;
