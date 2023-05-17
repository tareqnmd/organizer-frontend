import { createTheme } from '@mui/material/styles';
const theme = createTheme({
	mixins: {
		toolbar: {
			display: 'flex',
			justifyContent: 'space-between',
			a: {
				color: 'white',
				fontWeight: 'bold',
				textDecoration: 'none',
			},
			indicator: {
				backgroundColor: 'white',
			},
		},
	},
});

export default theme;
