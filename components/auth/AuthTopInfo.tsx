import PrimaryLogo from '../shared/logo/PrimaryLogo';

const AuthTopInfo = ({ type }: { type: string }) => {
	return (
		<div className="text-center mb-4">
			<PrimaryLogo />
			<h3 className="mt-3 text-xl font-medium">Welcome</h3>
			<p className="mt-1 text-gray-500">
				{type === 'login' ? 'Login' : 'Create'} your account
			</p>
		</div>
	);
};

export default AuthTopInfo;
