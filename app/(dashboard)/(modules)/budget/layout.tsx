import ModuleLayout from '@/components/layout/ModuleLayout';
const links = [
	{ name: 'Transactions', path: '/budget/transaction' },
	{ name: 'Types', path: '/budget/type' },
	{ name: 'Categories', path: '/budget/type-category' },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
