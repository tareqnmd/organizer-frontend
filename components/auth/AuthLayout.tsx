import { auth_options } from '@/lib/auth-options';
import { Card } from 'antd';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LargeLogo from '../core/LargeLogo';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(auth_options);
	if (session !== null) {
		return redirect('/');
	}
	return (
		<Card className="shadow">
			<div className="flex flex-col items-center gap-3">
				<LargeLogo />
				<div className="grid gap-1 place-items-center">{children}</div>
			</div>
		</Card>
	);
};

export default AuthLayout;
