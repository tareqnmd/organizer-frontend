import ResetPasswordForm from './ResetPasswordForm';

const ResetPassword = () => {
	return (
		<>
			<p className="text-sm font-medium">Reset Password</p>
			<ResetPasswordForm />
			<p className="text-xs">
				Remember your password?
				<a className="ml-1 font-medium hover:underline" href="/login">
					Login
				</a>
			</p>
		</>
	);
};

export default ResetPassword;
