import AuthLayout from '@/components/layout/AuthLayout';

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid h-screen place-items-center">
			<AuthLayout>{children}</AuthLayout>
		</div>
	);
};

export default AuthenticationLayout;
