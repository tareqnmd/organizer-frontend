import { getServerSession } from 'next-auth';

import NavLink from '@/components/layout/NavLink';
import { getRoutes } from '@/helper/shared/routes';
import { authOptions } from '@/lib/auth-options';
const Links = async () => {
	const session = await getServerSession(authOptions);
	return (
		<ul className="hidden md:flex items-center gap-2 text-sm">
			{session?.user?.role === 'admin' && (
				<li>
					<NavLink
						exact={false}
						link={{ name: 'Admin', path: '/admin' }}
					/>
				</li>
			)}
			{getRoutes('modules').map((link) => (
				<li key={link.path}>
					<NavLink
						exact={false}
						link={link}
					/>
				</li>
			))}
		</ul>
	);
};

export default Links;
