const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="container mx-auto py-4">
			<div className="">{children}</div>
		</main>
	);
};

export default Layout;
