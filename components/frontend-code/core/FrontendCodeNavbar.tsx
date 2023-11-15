import CommonNavLinks from '@/components/core/navbar/CommonNavLinks';
import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';

const links = [
	{ path: '/frontend-code', name: 'Basic' },
	{ path: '/frontend-code/a-b-testing', name: 'A/b Testing' },
];

const FrontendCodeNavbar = () => {
	return (
		<CommonNavWrapper>
			<CommonNavLinks links={links} />
		</CommonNavWrapper>
	);
};

export default FrontendCodeNavbar;
