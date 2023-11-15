import CommonNavLinks from '@/components/core/navbar/CommonNavLinks';
import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';
import UserNav from './UserNav';

const Navbar = () => {
	return (
		<CommonNavWrapper>
			<CommonNavLinks links={[{ path: '/frontend-code', name: 'Basic' }]} />
			<UserNav />
		</CommonNavWrapper>
	);
};

export default Navbar;
