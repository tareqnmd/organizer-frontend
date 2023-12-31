import AppLayout from '@/components/layout/AppLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <AppLayout>{children}</AppLayout>;
};

export default Layout;
