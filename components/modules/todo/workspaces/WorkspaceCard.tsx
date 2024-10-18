const WorkspaceCard = ({ workspace }: any) => {
	return (
		<div className="bg-light dark:bg-dark p-4 rounded-md shadow border min-h-[80px] flex items-center justify-center font-medium text-xl">
			{workspace.name}
		</div>
	);
};

export default WorkspaceCard;
