import logoImg from '@/assets/logo/logo.png';
import Image from 'next/image';

const PrimaryLogo = () => {
	return (
		<Image
			alt="Hisab Logo"
			src={logoImg}
			width={48}
			className="m-auto"
		/>
	);
};

export default PrimaryLogo;
