import UserManagement from '@/components/modules/admin/UserManagement';
import { UsersParamType } from '@/lib/helper/admin';

const Page = ({ searchParams = {} }: { searchParams?: UsersParamType }) => {
	return <UserManagement searchParams={searchParams} />;
};

export default Page;
