import LoginForm from './LoginForm';

const Login = () => {
	return (
		<>
			<p className="font-medium">Login your Account</p>
			<LoginForm />
			<p className="text-xs">
				Don&apos;t have an account?
				<a
					className="ml-1 font-medium hover:underline"
					href="/registration"
				>
					Create One
				</a>
			</p>
		</>
	);
};

export default Login;
