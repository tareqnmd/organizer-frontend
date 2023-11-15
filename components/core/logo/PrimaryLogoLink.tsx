import Link from 'next/link';
import PrimaryLogo from './PrimaryLogo';

const PrimaryLogoLink = () => {
	return (
		<Link
			href="/"
			className="logo"
		>
			<PrimaryLogo />
		</Link>
	);
};

export default PrimaryLogoLink;
