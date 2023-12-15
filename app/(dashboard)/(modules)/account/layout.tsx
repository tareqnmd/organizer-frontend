import ModuleLayout from '@/components/provider/ModuleLayout';
const links = [
	{ name: 'Transactions', path: '/account/transactions' },
	{ name: 'Create', path: '/account/create' },
	{ name: 'Types', path: '/account/types' },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
