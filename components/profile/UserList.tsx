'use client';
import Table from '@/components/ui/table/Table';
import { userTableColumns } from '@/utils/helpers/user/user-helper';
import { useState } from 'react';
import { BsFillEyeFill } from 'react-icons/bs';
import UserStatus from './status/UserStatus';

const UserList = ({ users }: any) => {
	const [modalType, setModalType] = useState('');
	const [userId, setUserId] = useState(null);

	const typeAction = (type: string, item: any) => {
		setModalType(type);
		setUserId(item?._id);
	};
	return (
		<>
			<UserStatus
				userId={userId}
				modalType={modalType}
				setModalType={setModalType}
			/>
			<div className="flex items-center justify-between border-b-2 border-stone-950 mb-2">
				<h3 className="font-semibold text-lg">Users</h3>
			</div>
			<Table
				columns={userTableColumns}
				data={users}
				actions={[
					{
						type: 'status',
						icon: <BsFillEyeFill />,
						clickHandler: typeAction,
					},
				]}
			/>
		</>
	);
};

export default UserList;
