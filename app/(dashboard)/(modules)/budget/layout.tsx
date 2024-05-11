import ModuleLayout from '@/components/layout/ModuleLayout';
const links = [
	{ name: 'Transaction', path: '/budget/transaction' },
	{ name: 'Type', path: '/budget/type' },
	{ name: 'Category', path: '/budget/type-category' },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
