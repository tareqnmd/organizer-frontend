const CustomModuleLayout = ({
	extraSection,
	children,
}: {
	children: React.ReactNode;
	extraSection: React.ReactNode;
}) => {
	return (
		<>
			<header className="border-b py-2 dark:border-slate-700">
				<div className="container mx-auto flex items-center justify-end gap-2 text-sm">
					{extraSection}
				</div>
			</header>
			<div className="container mx-auto h-full py-4">{children}</div>
		</>
	);
};

export default CustomModuleLayout;
