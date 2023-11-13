'use client'
import UserInfo from '@/components/profile/UserInfo';
import { useState } from 'react';
import { BiSolidUserCircle, BiUserCircle } from 'react-icons/bi';

const UserNav = () => {
	const [modalType, setModalType] = useState('');

	return (
		<>
			<UserInfo
				modalType={modalType}
				setModalType={setModalType}
			/>
			<button onClick={() => setModalType('profile')}>
				<BiSolidUserCircle />
			</button>
		</>
	);
};

export default UserNav;
