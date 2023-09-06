'use client';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineEye } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import Modal from '../modal/Modal';
import UserEditData from './UserEditData';
import styles from './UserInfo.module.scss';
import UserViewData from './UserViewData';

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
			footer={
				<>
					<button onClick={closeModal}>
						<AiOutlineClose />
						Close
					</button>
				</>
			}
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
			{mode === 'view' && <UserViewData />}
			{mode === 'edit' && <UserEditData />}
		</Modal>
	);
};

export default UserInfo;
