import DashboardFooter from './DashboardFooter';
import DashboardNavbar from './navbar/DashboardNavbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div id="dashboard">
			<DashboardNavbar />
			<main>{children}</main>
			<DashboardFooter />
		</div>
	);
};

export default DashboardLayout;
