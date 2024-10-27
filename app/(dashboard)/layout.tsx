import AppLayout from '@/components/auth/AppLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <AppLayout>{children}</AppLayout>;
};

export default Layout;
