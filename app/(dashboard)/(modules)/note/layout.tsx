import ModuleLayout from '@/components/provider/ModuleLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={[]}>{children}</ModuleLayout>;
};

export default Layout;
