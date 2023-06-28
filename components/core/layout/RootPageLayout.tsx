import RootLoading from '@/components/ui/RootLoading';
import { getThemeState } from '@/features/theme/theme-slice';
import useAuthCheck from '@/hooks/useAuthCheck';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const RootPageLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const { authChecked, publicPath } = useAuthCheck();
	const { loading } = useSelector(getThemeState);

	if (!loading && !authChecked && !publicPath) {
		router.push('/login');
	}
	if (!loading && authChecked && publicPath) {
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
