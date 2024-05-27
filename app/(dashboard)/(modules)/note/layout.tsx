import ModuleLayout from '@/components/layout/ModuleLayout';
const links = [
	{ name: 'Dashboard', path: '/note' },
	{ name: 'Notes', path: '/note/all' },
	{ name: 'Pinned', path: '/note/pinned' },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
