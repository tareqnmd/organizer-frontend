'use client';
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import UserEditData from './UserEditData';
import styles from './UserInfo.module.scss';
import UserViewData from './UserViewData';

const UserInfo = () => {
	const [mode, setMode] = useState('view');
	return (
		<section>
			<div className={styles['header']}>
				<h6>User Info</h6>
				<div>
					<button
						className={mode === 'view' ? styles['active'] : ''}
						onClick={() => setMode('view')}
					>
						<AiOutlineEye /> View
					</button>
					<button
						className={mode === 'edit' ? styles['active'] : ''}
						onClick={() => setMode('edit')}
					>
						<BiEditAlt /> Edit
					</button>
				</div>
			</div>
			{mode === 'view' && <UserViewData />}
			{mode === 'edit' && <UserEditData />}
		</section>
	);
};

export default UserInfo;
