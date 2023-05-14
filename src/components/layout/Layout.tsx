import { useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import MainBodyWrapper from './Layout.styled';

const Layout = ({ children }: any) => {
	const location = useLocation();
	if (location.pathname === '/login') {
		return <div className="section-center height-100">{children}</div>;
	}
	return (
		<MainBodyWrapper>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</MainBodyWrapper>
	);
};

export default Layout;
