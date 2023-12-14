import Footer from '../core/Footer';
import Navbar from '../core/Navbar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default AppLayout;
