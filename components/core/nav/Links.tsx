import { getServerSession } from 'next-auth';

import NavLink from '@/components/layout/NavLink';
import { authOptions } from '@/lib/auth-options';
import { UserRoleEnum } from '@/lib/helper/profile';
import { Routes } from '@/lib/routes';
const Links = async () => {
	const { user = { role: null } } = (await getServerSession(
		authOptions(),
	)) || {
		user: { role: null },
	};
	return (
		<ul className="flex items-center gap-3 text-sm">
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
			<li>
				<NavLink
					link={{
						name: Routes.DASHBOARD_MODULE_NAME,
						path: Routes.DASHBOARD_PATH,
					}}
				/>
			</li>
		</ul>
	);
};

export default Links;
