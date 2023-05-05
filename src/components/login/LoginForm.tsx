import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const LoginForm = () => {
	return (
		<>
			<TextField
				required
				label="User Name"
			/>
			<TextField
				required
				label="Password"
				type="password"
			/>
			<Button variant="contained">Contained</Button>
		</>
	);
};

export default LoginForm;
