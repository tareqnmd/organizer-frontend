import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../features/login/loginApi';
const LoginForm = () => {
	const [values, setValues] = useState({});
	const navigate = useNavigate();
	const [login, { isSuccess }] = useLoginMutation();
	const inputHandler = (e: any) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value ?? null }));
	};
	const submitHandler = (event: any): void => {
		event.preventDefault();
		login(values);
	};

	useEffect(() => {
		if (isSuccess) {
			navigate('/');
		}
	}, [isSuccess, navigate]);

	return (
		<Box
			component="form"
			onSubmit={submitHandler}
		>
			<TextField
				required
				label="User Name"
				name="username"
				autoComplete="off"
				onChange={inputHandler}
			/>
			<TextField
				required
				name="password"
				label="Password"
				type="password"
				onChange={inputHandler}
			/>
			<Button
				type="submit"
				variant="contained"
			>
				Contained
			</Button>
		</Box>
	);
};

export default LoginForm;
