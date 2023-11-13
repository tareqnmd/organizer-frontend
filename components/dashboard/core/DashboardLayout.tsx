import Navbar from './navabr/Navbar';
import Footer from './Footer';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div id="mainRoot">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default DashboardLayout;
