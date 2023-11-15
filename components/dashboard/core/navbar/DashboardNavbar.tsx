import CommonNavLinks from '@/components/core/navbar/CommonNavLinks';
import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';
import UserNav from './UserNav';

const DashboardNavbar = () => {
	return (
		<CommonNavWrapper>
			<CommonNavLinks links={[{ path: '/config', name: 'Config' }]} />
			<UserNav />
		</CommonNavWrapper>
	);
};

export default DashboardNavbar;
