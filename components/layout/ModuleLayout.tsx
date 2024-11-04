import { RouteType } from '@/lib/routes';
import ModuleLink from './NavLink';

const ModuleLayout = ({
	links,
	children,
}: {
	children: React.ReactNode;
	links: RouteType[];
}) => {
	return (
		<>
			<header className="border-b py-2 dark:border-slate-700">
				<div className="container mx-auto flex items-center justify-end gap-2 text-sm">
					{links.map((link) => (
						<ModuleLink key={link.path} link={link} />
					))}
				</div>
			</header>
			<div className="container relative mx-auto h-full py-4">
				{children}
			</div>
		</>
	);
};

export default ModuleLayout;
