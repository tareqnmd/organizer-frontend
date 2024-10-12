const CustomModuleLayout = ({
	extraSection,
	children,
}: {
	children: React.ReactNode;
	extraSection: React.ReactNode;
}) => {
	return (
		<>
			<header className="border-b dark:border-slate-700 py-2">
				<div className="container gap-2 mx-auto flex items-center justify-end text-sm">
					{extraSection}
				</div>
			</header>
			<div className="container mx-auto py-4 h-full">{children}</div>
		</>
	);
};

export default CustomModuleLayout;
