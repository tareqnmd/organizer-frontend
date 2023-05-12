import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userValue } from '../../utils/common-types';

const AuthCheck = ({ children }: any) => {
	const user = useSelector((state: userValue) => state.user);
	return user?.username ? children : <Navigate to="/login" />;
};

export default AuthCheck;
