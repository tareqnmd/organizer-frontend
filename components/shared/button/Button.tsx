import { ButtonProps } from '@/utils/types/button-types';
import { FC } from 'react';
import styles from './Button.module.scss';
const Button: FC<ButtonProps> = ({
	type = 'button',
	name,
	extraClassNames = '',
}) => {
	return (
		<button
			type={type}
			className={`${styles['button']} ${extraClassNames}`}
		>
			{name}
		</button>
	);
};

export default Button;
