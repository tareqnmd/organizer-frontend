import { ButtonProps } from '@/utils/types/button-types';
import { FC } from 'react';
import styles from './Button.module.scss';
const Button: FC<ButtonProps> = ({ type = 'button', name }) => {
	return (
		<button
			type={type}
			className={styles['button']}
		>
			{name}
		</button>
	);
};

export default Button;
