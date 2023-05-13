import { AppBar, Button, Tab, Tabs, Toolbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../features/user/userSlice';

const Navbar = () => {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		dispatch(logOut());
		localStorage.removeItem('user');
	};
	return (
		<nav>
			<AppBar>
				<Toolbar>
					<Link to="/">Hisab</Link>
					<Tabs value={0}>
						<Tab
							component={Link}
							to="/"
							label="Home"
						/>
						<Tab
							component={Link}
							to="/add-transaction"
							label="ADD Transaction"
						/>
						<Button
							onClick={logoutHandler}
							variant="contained"
						>
							Logout
						</Button>
					</Tabs>
				</Toolbar>
			</AppBar>
		</nav>
	);
};

export default Navbar;
