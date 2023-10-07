const Card = ({
	title,
	value,
	text,
	extra_class,
	icon,
}: {
	title: string;
	value: string;
	text?: string;
	extra_class?: string;
	icon?: React.ReactNode;
}) => {
	return (
		<div
			className={`${
				extra_class ?? ''
			} rounded-xl border bg-card text-card-foreground shadow p-3 bg-[#fff]`}
		>
			<div className="flex flex-row items-center justify-between space-y-0 pb-2">
				<h4 className="text-sm font-medium">{title}</h4>
				{icon}
			</div>
			<div>
				<div className="text-2xl font-bold">{value}</div>
				<p className="text-xs text-muted-foreground">{text}</p>
				{text && (
					<p className="text-xs text-muted-foreground">{text}</p>
				)}
			</div>
		</div>
	);
};

export default Card;
