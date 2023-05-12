import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userValue } from '../../utils/common-types';

const HomeRedirect = ({ children }: any) => {
	const user = useSelector((state: userValue) => state.user);
	return user?.username ? <Navigate to="/" /> : children;
};

export default HomeRedirect;
