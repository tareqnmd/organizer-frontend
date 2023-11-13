const CommonNavWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<nav className="nav-links sticky top-0 z-50 w-full border-b backdrop-blur bg-background/50">
			<div className="container mx-auto flex items-center py-3 px-2 gap-2">
				{children}
			</div>
		</nav>
	);
};

export default CommonNavWrapper;
