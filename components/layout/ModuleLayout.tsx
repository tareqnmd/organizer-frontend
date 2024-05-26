import ModuleLink from './ModuleLink';

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
					{links.map((link: LinkType) => (
						<ModuleLink
							key={link.path}
							link={link}
						/>
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
