import AuthContentLayout from '@/components/auth/AuthContentLayout';

const VerifyEmailLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout title="Verify your email" socialLogin={false}>
			{children}
		</AuthContentLayout>
	);
};

export default VerifyEmailLayout;
