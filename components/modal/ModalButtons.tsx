import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import TransactionForm from '../transactions/form/TransactionForm';
import UserInfo from '../user/UserInfo';
import styles from './ModalButtons.module.scss';

const ModalButtons = () => {
	const [modalType, setModalType] = useState('');

	return (
		<>
			<UserInfo
				modalType={modalType}
				setModalType={setModalType}
			/>
			<TransactionForm
				modalType={modalType}
				setModalType={setModalType}
			/>
			<div className={styles['transaction-links']}>
				<button onClick={() => setModalType('form')}>
					<MdOutlineAddCircleOutline />
					Create
				</button>
				<button onClick={() => setModalType('profile')}>
					<CgProfile />
					Profile
				</button>
			</div>
		</>
	);
};

export default ModalButtons;
