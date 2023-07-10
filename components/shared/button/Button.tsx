import { ButtonProps } from '@/utils/types/button-types';
import { FC } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiLogIn, FiSave } from 'react-icons/fi';
import styles from './Button.module.scss';
const Button: FC<ButtonProps> = ({
	type = 'button',
	name,
	extraClassNames = '',
	loading = false,
	mutation = false,
	auth = false,
}) => {
	return (
		<button
			type={type}
			className={`${styles['button']} ${extraClassNames}`}
		>
			{loading && <AiOutlineLoading3Quarters className="animate-spin" />}
			{!loading && mutation && <FiSave />}
			{!loading && auth && <FiLogIn />}
			{name}
		</button>
	);
};

export default Button;
