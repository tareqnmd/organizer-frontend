import { useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import TransactionForm from '../form/TransactionForm';
import styles from './TransactionButton.module.scss';

const TransactionButton = () => {
	const [modalType, setModalType] = useState('');

	return (
		<>
			<TransactionForm
				modalType={modalType}
				setModalType={setModalType}
			/>
			<div className={styles['transaction-btns']}>
				<button onClick={() => setModalType('form')}>
					<MdOutlineAddCircleOutline />
					Create
				</button>
			</div>
		</>
	);
};

export default TransactionButton;
