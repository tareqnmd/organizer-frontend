import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPassword = () => {
	return (
		<>
			<p className="text-sm font-medium">Forgot Password</p>
			<ForgotPasswordForm />
			<p className="text-xs">
				Remember your password?
				<a className="ml-1 font-medium hover:underline" href="/login">
					Login
				</a>
			</p>
		</>
	);
};

export default ForgotPassword;
