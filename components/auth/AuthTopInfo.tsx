import PrimaryLogo from '../core/logo/PrimaryLogo';

const AuthTopInfo = ({ type }: { type: string }) => {
	return (
		<div className="flex flex-col items-center mb-4">
			<PrimaryLogo />
			<h3 className="mt-3 text-xl font-medium">Welcome</h3>
			<p className="mt-1 text-gray-500">
				{type === 'login' ? 'Login' : 'Create'} your account
			</p>
		</div>
	);
};

export default AuthTopInfo;
