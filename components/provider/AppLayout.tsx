import { auth_options } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Footer from '../core/Footer';
import Navbar from '../core/Navbar';

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(auth_options);
	if (!session?.user?.email) {
		return redirect('api/auth/signin');
	}
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default AppLayout;
