import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import MainBodyWrapper from './Layout.styled';

const Layout = ({ children }: any) => {
	return (
		<MainBodyWrapper>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</MainBodyWrapper>
	);
};

export default Layout;
