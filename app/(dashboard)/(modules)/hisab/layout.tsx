import ModuleLayout from '@/components/provider/ModuleLayout';
const links = [
	{ name: 'Transactions', path: '/hisab/transactions' },
	{ name: 'Create', path: '/hisab/transaction-create' },
	{ name: 'Types', path: '/hisab/types' },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
