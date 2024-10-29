import { AuthContentLayoutPropsType } from '@/lib/helper/auth';
import Link from 'next/link';
import SocialLogin from './SocialLogin';

const AuthContentLayout = ({
	children,
	title = '',
	socialLogin = true,
	anotherLink,
	anotherLinkText,
}: AuthContentLayoutPropsType) => {
	return (
		<>
			<p className="text-sm font-medium">{title}</p>
			{children}
			{socialLogin ? <SocialLogin /> : null}
			{anotherLink?.href ? (
				<div className="text-xs">
					{anotherLinkText}
					<Link
						className="ml-1 font-medium hover:underline"
						href={anotherLink?.href}
					>
						{anotherLink?.label}
					</Link>
				</div>
			) : null}
		</>
	);
};
0;

export default AuthContentLayout;
