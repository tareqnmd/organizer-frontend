import ModuleLayout from '@/components/layout/ModuleLayout';
const links = [
	{ name: 'Dashboard', path: '/note' },
	{ name: 'Notes', path: '/note/all' },
	{ name: 'Pinned', path: '/note/pinned' },
	{ name: 'New', path: '/note/new' },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
