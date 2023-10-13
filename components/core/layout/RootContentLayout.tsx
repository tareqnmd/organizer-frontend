import Submenu from '../navbar/Submenu';

const RootContentLayout = ({
	children,
	subMenuLinks,
}: {
	children: React.ReactNode;
	subMenuLinks?: any;
}) => {
	return (
		<>
			{subMenuLinks?.length > 0 && <Submenu links={subMenuLinks} />}
			<section className="main-content">{children}</section>
		</>
	);
};

export default RootContentLayout;
