import CommonNavLinks from '@/components/core/navbar/CommonNavLinks';
import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';

const links = [{ path: '/planner', name: 'Planner', exact: true }];

const PlannerNavbar = () => {
	return (
		<CommonNavWrapper>
			<CommonNavLinks links={links} />
		</CommonNavWrapper>
	);
};

export default PlannerNavbar;
