import { getServerSession } from 'next-auth';

import NavLink from '@/components/layout/NavLink';
import { authOptions } from '@/lib/auth-options';
import { UserRoleEnum } from '@/lib/helper/profile';
import { getRouteName, getRoutes, Routes } from '@/lib/routes';
const Links = async () => {
	const session = await getServerSession(authOptions());
	return (
		<ul className="hidden items-center gap-2 text-sm md:flex">
			{session?.user?.role === UserRoleEnum.ADMIN && (
				<li>
					<NavLink
						exact={false}
						link={{
							name: getRouteName('misc', Routes.ADMIN),
							path: Routes.ADMIN,
						}}
					/>
				</li>
			)}
			{getRoutes('modules').map((link) => (
				<li key={link.path}>
					<NavLink exact={false} link={link} />
				</li>
			))}
		</ul>
	);
};

export default Links;
