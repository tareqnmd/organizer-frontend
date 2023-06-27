import styles from './Login.module.scss';
import LoginForm from './LoginForm';
import LoginTopInfo from './LoginTopInfo';
const Login = () => {
	return (
		<section className={`${styles['login-wrapper']} bg-[#F3F4F6]`}>
			<div className={`${styles['login-area']}`}>
				<LoginTopInfo />
				<LoginForm />
			</div>
		</section>
	);
};

export default Login;
