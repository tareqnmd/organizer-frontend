'use client';
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import UserInfo from './UserInfo';
const UserArea = () => {
	const [modalType, setModalType] = useState('');

	return (
		<>
			<UserInfo
				modalType={modalType}
				setModalType={setModalType}
			/>
			<div className="flex justify-end">
				<div
					onClick={() => setModalType('profile')}
					className="cursor-pointer w-max p-1 border-2 rounded-lg border border-[##0B2447]  bg-[#fff]"
				>
					<FaUserAlt />
				</div>
			</div>
		</>
	);
};

export default UserArea;
