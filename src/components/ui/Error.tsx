import { Alert, AlertTitle } from '@mui/material';

const Error = ({ message }: { message: string }) => {
	return (
		<Alert severity="error">
			<AlertTitle>Error</AlertTitle>
			<strong>{message}</strong>
		</Alert>
	);
};

export default Error;
