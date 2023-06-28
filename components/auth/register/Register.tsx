import AuthWrapper from '../AuthWrapper';
import RegisterForm from './RegisterForm';
const Register = () => {
	return (
		<AuthWrapper type="register">
			<RegisterForm />
		</AuthWrapper>
	);
};

export default Register;
