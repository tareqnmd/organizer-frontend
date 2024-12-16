import { getServerSession } from 'next-auth';

import NavLink from '@/components/layout/NavLink';
import { authOptions } from '@/lib/auth-options';
import { UserRoleEnum } from '@/lib/helper/profile';
import { getRoutes, Routes } from '@/lib/routes';
const Links = async () => {
	const { user = { role: null } } = (await getServerSession(
		authOptions(),
	)) || {
		user: { role: null },
	};
	return (
		<ul className="hidden items-center gap-3 text-sm md:flex">
			{user?.role === UserRoleEnum.ADMIN && (
				<li>
					<NavLink
						exact={false}
						link={{
							name: Routes.ADMIN_NAME,
							path: Routes.ADMIN_PATH,
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
