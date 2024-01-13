import { LoginForm } from './LoginForm';
import LoginSocialActions from './LoginSocialActions';

const Login = () => {
	return (
		<>
			<p className="font-medium">Welcome</p>
			<LoginForm />
			<LoginSocialActions />
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
