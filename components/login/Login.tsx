import styles from './Login.module.scss';
import LoginForm from './LoginForm';
const Login = () => {
	return (
		<section className={`${styles['login-wrapper']}`}>
			<div className={`${styles['login-area']}`}>
				<LoginForm />
			</div>
		</section>
	);
};

export default Login;
