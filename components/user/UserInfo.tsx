'use client';
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import Modal from '../modal/Modal';
import UserEditData from './UserEditData';
import styles from './UserInfo.module.scss';
import UserInfoData from './UserInfoData';

const UserInfo = ({ setModalType, modalType }: any) => {
	const [mode, setMode] = useState('view');
	const closeModal = () => {
		setModalType('');
	};
	return (
		<Modal
			title="User Info"
			open={modalType === 'profile'}
			onCancel={closeModal}
		>
			<div className={styles['header']}>
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
			{mode === 'view' && <UserInfoData />}
			{mode === 'edit' && <UserEditData closeModal={closeModal} />}
		</Modal>
	);
};

export default UserInfo;
