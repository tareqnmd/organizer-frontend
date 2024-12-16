import AuthRootLayout from '@/components/auth/AuthRootLayout';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="my-4 grid place-items-center">
			<AuthRootLayout>{children}</AuthRootLayout>
		</div>
	);
};

export default AuthLayout;
