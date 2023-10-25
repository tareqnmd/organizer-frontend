import { getThemeState } from '@/features/theme/slice';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ModuleWiseNav = () => {
	const { module } = useSelector(getThemeState);
	const { links } = module;

	return (
		<>
			{links?.map((link) => (
				<Link
					key={link?.path}
					href={link?.path}
				>
					{link?.name}
				</Link>
			))}
		</>
	);
};

export default ModuleWiseNav;
