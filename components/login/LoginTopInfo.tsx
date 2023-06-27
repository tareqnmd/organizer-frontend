import PrimaryLogo from '../shared/logo/PrimaryLogo';

const LoginTopInfo = () => {
	return (
		<div className="text-center mb-4">
			<PrimaryLogo />
			<h3 className="mt-3 text-xl font-medium">Welcome Back</h3>
			<p className="mt-1 text-gray-500">Login or create account</p>
		</div>
	);
};

export default LoginTopInfo;
