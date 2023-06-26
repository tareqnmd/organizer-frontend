import useAuthCheck from '@/hooks/useAuthCheck';
import { useRouter } from 'next/navigation';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const RootPageLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const { authChecked, pathname } = useAuthCheck();

	if (!authChecked && pathname !== '/login') {
		router.push('/login');
	}
	if (authChecked && pathname === '/login') {
		router.push('/');
	}
	return (
		<>
			{authChecked && (
				<div id="mainRoot">
					<Navbar />
					<main>{children}</main>
					<Footer />
				</div>
			)}
			{!authChecked && <main>{children}</main>}
		</>
	);
};

export default RootPageLayout;
