import { authOptions } from '@/lib/auth-options';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(authOptions());
	if (!session?.user?.email) {
		return redirect('/login');
	}
	return children;
};

export default Layout;
