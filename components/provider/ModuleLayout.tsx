import Link from 'next/link';

export type LinksType = LinkType[];
export type LinkType = {
	name: string;
	path: string;
};

const ModuleLayout = ({
	links,
	children,
}: {
	children: React.ReactNode;
	links: LinksType;
}) => {
	return (
		<>
			<header className="border-b py-2">
				<div className="container gap-2 mx-auto flex items-center justify-end text-sm">
					{links.map((link) => (
						<Link
							href={link.path}
							key={link.path}
							className="transition hover:underline"
						>
							{link.name}
						</Link>
					))}
				</div>
			</header>
			<div className="container mx-auto py-4 h-full">{children}</div>
		</>
	);
};

export default ModuleLayout;
{
}
