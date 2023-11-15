import CommonNavLinks from '@/components/core/navbar/CommonNavLinks';
import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';

const ConfigNavbar = () => {
	return (
		<CommonNavWrapper>
			<CommonNavLinks links={[{ path: '/config/users', name: 'Users' }]} />
		</CommonNavWrapper>
	);
};

export default ConfigNavbar;
