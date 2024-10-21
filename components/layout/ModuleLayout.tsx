import { RouteType } from '@/helper/shared/types';
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
			<header className="border-b dark:border-slate-700 py-2">
				<div className="container gap-2 mx-auto flex items-center justify-end text-sm">
					{links.map((link) => (
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
