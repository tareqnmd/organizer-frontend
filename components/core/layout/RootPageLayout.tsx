import RootLoading from '@/components/ui/loader/RootLoading';
import { getThemeState } from '@/features/theme/theme-slice';
import useAuthCheck from '@/hooks/user/useAuthCheck';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const RootPageLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const { authChecked, publicPath } = useAuthCheck();
	const { loading } = useSelector(getThemeState);

	if (loading) {
		return <RootLoading />;
	}

	if (!authChecked && !publicPath) {
		router.push('/auth/login');
		return null;
	}
	if (authChecked && publicPath) {
		router.push('/');
		return null;
	}

	return (
		<>
			{!authChecked && <main>{children}</main>}
			{authChecked && (
				<div id="mainRoot">
					<Navbar />
					<main>{children}</main>
					<Footer />
				</div>
			)}
		</>
	);
};

export default RootPageLayout;
