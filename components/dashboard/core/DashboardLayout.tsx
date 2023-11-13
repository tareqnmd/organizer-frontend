import Footer from './Footer';
import Navbar from './navbar/Navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div id="dashboard">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default DashboardLayout;
