import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Button, Toolbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo/primary-logo.png';
import { logOut } from '../../features/user/userSlice';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const logoutHandler = () => {
		dispatch(logOut());
		localStorage.removeItem('user');
	};
	return (
		<nav>
			<AppBar
				position="sticky"
				className={styles['app-nav']}
			>
				<Toolbar className={styles['nav-items']}>
					<Link to="/">
						<img
							className={styles['logo-img']}
							src={logo}
							alt="Hisab"
						/>
					</Link>
					<div className={styles['nav-links']}>
						<Link
							className={location?.pathname === '/' ? styles.active : ''}
							to="/"
						>
							Home
						</Link>
						<Link
							className={
								location?.pathname === '/transactions' ? styles.active : ''
							}
							to="/transactions"
						>
							Transactions
						</Link>
						<Link
							className={
								location?.pathname === '/add-transaction' ? styles.active : ''
							}
							to="/add-transaction"
						>
							Add
						</Link>
						<Button
							onClick={logoutHandler}
							variant="contained"
						>
							<LogoutIcon /> Logout
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		</nav>
	);
};

export default Navbar;
