import FrontendCodeFooter from './FrontendCodeFooter';
import FrontendCodeNavbar from './FrontendCodeNavbar';

const FrontendCodeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div id="frontend_code">
			<FrontendCodeNavbar />
			<main>{children}</main>
			<FrontendCodeFooter />
		</div>
	);
};

export default FrontendCodeLayout;
