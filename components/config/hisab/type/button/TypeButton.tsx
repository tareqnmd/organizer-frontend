import { useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import TypeForm from '../form/TypeForm';
import styles from './TypeButton.module.scss';

const TypeButton = () => {
	const [modalType, setModalType] = useState('');
	return (
		<>
			<TypeForm
				modalType={modalType}
				setModalType={setModalType}
			/>
			<div className={styles['type-btns']}>
				<button onClick={() => setModalType('form')}>
					<MdOutlineAddCircleOutline />
					Create
				</button>
			</div>
		</>
	);
};

export default TypeButton;
