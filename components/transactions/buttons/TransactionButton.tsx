import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import UserInfo from '../../user/UserInfo';
import TransactionForm from '../form/TransactionForm';
import styles from './TransactionButton.module.scss';

const TransactionButton = () => {
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
			<div className={styles['transaction-btns']}>
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

export default TransactionButton;
