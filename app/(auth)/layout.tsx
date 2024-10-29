import AuthRootLayout from '@/components/auth/AuthRootLayout';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid h-screen place-items-center">
			<AuthRootLayout>{children}</AuthRootLayout>
		</div>
	);
};

export default AuthLayout;
