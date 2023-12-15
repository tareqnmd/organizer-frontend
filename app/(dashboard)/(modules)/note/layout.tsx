import ModuleLayout from '@/components/provider/ModuleLayout';
const links = [
	{ name: 'Notes', path: '/note/all' },
	{ name: 'Create', path: '/note/create' },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
