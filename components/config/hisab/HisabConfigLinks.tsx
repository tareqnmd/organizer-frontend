import Submenu from '@/components/core/navbar/Submenu';

const links = [{ path: 'config/hisab', name: 'Hisab' }];

const HisabConfigLinks = () => {
	return <Submenu links={links} />;
};

export default HisabConfigLinks;
