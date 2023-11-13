import PlannerFooter from './PlannerFooter';
import PlannerNavbar from './PlannerNavbar';

const PlannerLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div id="planner">
			<PlannerNavbar />
			<main>{children}</main>
			<PlannerFooter />
		</div>
	);
};

export default PlannerLayout;
