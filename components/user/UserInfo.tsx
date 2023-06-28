'use client';
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import UserEditData from './UserEditData';
import styles from './UserInfo.module.scss';
import UserViewData from './UserViewData';

const UserInfo = () => {
	const [editMode, setEditMode] = useState(false);
	return (
		<div>
			<div className={styles['header']}>
				<span>User Info</span>
				{editMode ? (
					<button onClick={() => setEditMode(false)}>
						<AiOutlineEye /> View
					</button>
				) : (
					<button onClick={() => setEditMode(true)}>
						<BiEditAlt /> Edit
					</button>
				)}
			</div>
			{editMode ? <UserEditData /> : <UserViewData />}
		</div>
	);
};

export default UserInfo;
