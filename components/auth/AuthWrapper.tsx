import Link from 'next/link';
import AuthTopInfo from './AuthTopInfo';
import styles from './AuthWrapper.module.scss';

const AuthWrapper = ({
	type,
	children,
}: {
	type: string;
	children: React.ReactNode;
}) => {
	const authType = type === 'register';
	return (
		<section className={`${styles['auth-wrapper']} bg-[#0B2447]`}>
			<div className={`${styles['auth-area']}`}>
				<AuthTopInfo type={type} />
				{children}
				<p className="mt-4 text-xs font-light text-center text-gray-600">
					{authType ? (
						<>Already have an account?</>
					) : (
						<>Don&apos;t have an account?</>
					)}
					<Link
						href={authType ? '/login' : '/register'}
						className="ml-1 font-medium text-gray-700 hover:underline"
					>
						{authType ? 'Login' : 'Create One'}
					</Link>
				</p>
			</div>
		</section>
	);
};

export default AuthWrapper;
