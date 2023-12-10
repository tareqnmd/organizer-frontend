const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<header></header>
			<div className="container mx-auto">{children}</div>
		</>
	);
};

export default Layout;
