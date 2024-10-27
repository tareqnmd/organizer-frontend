import AuthContentLayout from '@/components/auth/AuthContentLayout';

const ResetPasswordLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Reset Password"
			socialLogin={false}
			anotherLink={{
				href: '/login',
				label: 'Login',
			}}
			anotherLinkText="Remember your password?"
		>
			{children}
		</AuthContentLayout>
	);
};

export default ResetPasswordLayout;
