import RegistrationForm from './ResitrationForm';

const Registration = () => {
	return (
		<>
			<p className="font-medium text-lg">Create your account</p>
			<RegistrationForm />
			<p>
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
