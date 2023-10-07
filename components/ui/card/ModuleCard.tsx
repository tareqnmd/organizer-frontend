const ModuleCard = ({
	text,
	extra_class,
	icon,
}: {
	text?: string;
	extra_class?: string;
	icon?: React.ReactNode;
}) => {
	return (
		<div
			className={`${
				extra_class ?? ''
			} rounded-xl border bg-card text-card-foreground shadow p-4 bg-[#fff]`}
		>
			<div className="flex items-center justify-between">
				<p className="text-2xl ">{text}</p>
				<span className="text-4xl">{icon}</span>
			</div>
		</div>
	);
};

export default ModuleCard;
