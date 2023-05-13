import { AppBar, Toolbar } from '@mui/material';

const Navbar = () => {
	return (
		<nav>
			<AppBar sx={{ display: 'flex!important' }}>
				<Toolbar>Hisab</Toolbar>
				<Toolbar>Add</Toolbar>
			</AppBar>
		</nav>
	);
};

export default Navbar;
