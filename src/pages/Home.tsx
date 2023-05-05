import { useGetUsersQuery } from '../features/user/userApi';

const Home = () => {
	const { data } = useGetUsersQuery({});
	console.log('data', data);
	return <>home</>;
};

export default Home;
