import ModuleLayout from '@/components/layout/ModuleLayout';
const links = [
	{ name: 'Transactions', path: '/budget/transactions' },
	{ name: 'Types', path: '/budget/types' },
	{ name: 'Categories', path: '/budget/types/categories' },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
