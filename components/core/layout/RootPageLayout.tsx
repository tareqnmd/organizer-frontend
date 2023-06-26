import RootLoading from '@/components/ui/RootLoading';
import useAuthCheck from '@/hooks/useAuthCheck';
import { useRouter } from 'next/navigation';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const RootPageLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const { loading, authChecked, pathname } = useAuthCheck();

	if (!loading &&  !authChecked && pathname !== '/login') {
		router.push('/login');
	}
	if (!loading && authChecked && pathname === '/login') {
		router.push('/');
	}
	return (
		<>
			{loading && <RootLoading />}
			{!loading && authChecked && (
				<div id="mainRoot">
					<Navbar />
					<main>{children}</main>
					<Footer />
				</div>
			)}
			{!loading && !authChecked && <main>{children}</main>}
		</>
	);
};

export default RootPageLayout;
