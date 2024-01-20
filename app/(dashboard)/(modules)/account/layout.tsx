import ModuleLayout from '@/components/layout/ModuleLayout';
const links = [
	{ name: 'Transactions', path: '/account/transactions' },
	{ name: 'Types', path: '/account/transaction-types' },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
