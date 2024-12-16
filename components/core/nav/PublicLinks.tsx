import NavLink from '@/components/layout/NavLink';
import { getRoutes } from '@/lib/routes';
const PublicLinks = async () => {
	return (
		<ul className="flex items-center gap-3 text-sm">
			{getRoutes('public_links').map((link) => (
				<li key={link.path}>
					<NavLink exact={false} link={link} />
				</li>
			))}
		</ul>
	);
};

export default PublicLinks;
