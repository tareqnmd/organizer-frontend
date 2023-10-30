import { fetchServerData } from '@/utils/fetch/axios-fetch';
import UserList from './UserList';

async function getTransactionData() {
	try {
		const response = await fetchServerData('user');
		return response.data;
	} catch (error) {
		return [];
	}
}
const UserDetails = async () => {
	const users = await getTransactionData();
	return <UserList users={users} />;
};

export default UserDetails;
