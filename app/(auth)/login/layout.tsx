import AuthContentLayout from '@/components/auth/AuthContentLayout';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthContentLayout
			title="Welcome"
			anotherLink={{ href: '/registration', label: 'Create One' }}
			anotherLinkText="Don't have an account?"
		>
			{children}
		</AuthContentLayout>
	);
};

export default LoginLayout;
