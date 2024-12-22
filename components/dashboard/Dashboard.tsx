import { Routes, RouteType } from '@/lib/routes';
import Link from 'next/link';
import Module from './Module';

const Dashboard = ({
	modules,
	loggedIn,
}: {
	modules: RouteType[];
	loggedIn: boolean;
}) => {
	return (
		<div className="m-auto grid h-full max-w-screen-xl grid-cols-1 place-content-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{modules.map((module) => (
				<Module key={module.path} module={module} />
			))}
			{!loggedIn && (
				<div className="col-span-full my-2">
					<div className="mx-auto w-max gap-1 rounded-md border px-4 py-2 text-center text-sm">
						Please{' '}
						<Link className="underline" href={Routes.LOGIN_PATH}>
							{Routes.LOGIN_NAME}
						</Link>{' '}
						to see more modules
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
