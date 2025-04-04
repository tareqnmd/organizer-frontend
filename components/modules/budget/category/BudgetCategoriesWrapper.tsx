const BudgetCategoriesWrapper = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-lg font-bold">{title}</h3>
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
				{children}
			</div>
		</div>
	);
};

export default BudgetCategoriesWrapper;
