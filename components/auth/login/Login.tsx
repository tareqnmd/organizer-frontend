import AuthWrapper from '../AuthWrapper';
import LoginForm from './LoginForm';
const Login = () => {
	return (
		<AuthWrapper type="login">
			<LoginForm />
		</AuthWrapper>
	);
};

export default Login;
