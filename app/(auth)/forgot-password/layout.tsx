import AuthContentLayout from '@/components/auth/AuthContentLayout';

const ForgotPasswordLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Forgot Password"
			socialLogin={false}
			anotherLink={{ href: '/login', label: 'Login' }}
			anotherLinkText="Remember your password?"
		>
			{children}
		</AuthContentLayout>
	);
};

export default ForgotPasswordLayout;
