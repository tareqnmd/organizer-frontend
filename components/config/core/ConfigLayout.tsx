import ConfigFooter from './ConfigFooter';
import ConfigNavbar from './ConfigNavbar';

const ConfigLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div id="config">
			<ConfigNavbar />
			<main>{children}</main>
			<ConfigFooter />
		</div>
	);
};

export default ConfigLayout;
