import HisabFooter from './HisabFooter';
import HisabNavbar from './HisabNavbar';

const HisabLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div id="hisab">
			<HisabNavbar />
			<main>{children}</main>
			<HisabFooter />
		</div>
	);
};

export default HisabLayout;
