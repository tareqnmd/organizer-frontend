import { auth_options } from '@/lib/auth-options';
import { Card } from 'antd';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LargeLogo from '../core/LargeLogo';
import { ModeToggle } from '../core/nav/ModeToggle';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(auth_options);
	if (session?.user?.email) {
		return redirect('/');
	}
	return (
		<>
			<div className="absolute top-4 right-4">
				<ModeToggle />
			</div>
			<Card className="shadow">
				<div className="flex flex-col items-center gap-3">
					<LargeLogo />
					<div className="grid gap-1 place-items-center">{children}</div>
				</div>
			</Card>
		</>
	);
};

export default AuthLayout;
