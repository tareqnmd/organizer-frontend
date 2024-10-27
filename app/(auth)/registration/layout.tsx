import AuthContentLayout from '@/components/auth/AuthContentLayout';

const RegistrationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Create an account"
			anotherLinkText="Already have an account?"
			anotherLink={{
				href: '/login',
				label: 'Login',
			}}
		>
			{children}
		</AuthContentLayout>
	);
};

export default RegistrationLayout;
