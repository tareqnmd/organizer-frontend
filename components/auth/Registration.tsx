import AuthSocialActions from '../common/AuthSocialActions';
import RegistrationForm from './ResitrationForm';

const Registration = () => {
	return (
		<>
			<p className="font-medium text-sm">Create your account</p>
			<RegistrationForm />
			<AuthSocialActions />
			<p className="text-xs">
				Already have an account?
				<a
					className="ml-1 font-medium hover:underline"
					href="/login"
				>
					Login
				</a>
			</p>
		</>
	);
};

export default Registration;
