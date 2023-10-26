'use client';
import Modal from '@/components/ui/modal/Modal';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BiEditAlt, BiLogOut } from 'react-icons/bi';
import UserEditData from './UserEditData';
import styles from './UserInfo.module.scss';
import UserInfoData from './UserInfoData';
import { useLogoutMutation } from '@/features/auth/api';

const UserInfo = ({ setModalType, modalType }: any) => {
	const [mode, setMode] = useState('view');
	const router = useRouter();
	const [logout, { isLoading, isSuccess }] = useLogoutMutation();

	const closeModal = () => {
		setModalType('');
	};

	const logoutHandler = () => {
		logout({});
	};

	useEffect(() => {
		if (isSuccess) {
			router.push('/login');
		}
	}, [isSuccess, router]);

	return (
		<Modal
			title="User Info"
			open={modalType === 'profile'}
			footer={
				<div>
					<button
						disabled={isLoading}
						className={styles['logout-btn']}
						onClick={logoutHandler}
					>
						<BiLogOut /> Logout
					</button>
				</div>
			}
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
