import { Alert, AlertTitle } from '@mui/material';

const NoDataFound = () => {
	return (
		<Alert severity="info">
			<AlertTitle>Info</AlertTitle>
			<strong>No Data Found</strong>
		</Alert>
	);
};

export default NoDataFound;
