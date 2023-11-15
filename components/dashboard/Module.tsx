import Link from 'next/link';

const Module = ({ module }: any) => {
	const { link, name, extra_class, icon } = module;
	return (
		<Link
			href={link}
			className={`${
				extra_class ?? ''
			} rounded-xl border bg-card text-card-foreground shadow p-4 bg-[#fff] cursor-pointer`}
		>
			<div className="flex items-center justify-between">
				<p className="text-xl font-medium text-primary">{name}</p>
				<span className="text-2xl text-primary">{icon}</span>
			</div>
		</Link>
	);
};

export default Module;
