import { getThemeState } from '@/features/theme/slice';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

const ModuleWiseNav = () => {
	const { module } = useSelector(getThemeState);
	const pathname = usePathname();
	const { links } = module;

	return (
		<>
			<Link
				href="/config"
				className={pathname.includes('/config') ? 'active-path' : ''}
			>
				Config
			</Link>
			{links?.map((link) => (
				<Link
					key={link?.path}
					href={link?.path}
					className={
						(
							link?.exact
								? pathname === link?.path
								: pathname.includes(link?.path)
						)
							? 'active-path'
							: ''
					}
				>
					{link?.name}
				</Link>
			))}
		</>
	);
};

export default ModuleWiseNav;
