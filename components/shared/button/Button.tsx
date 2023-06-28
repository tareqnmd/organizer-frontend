import { ButtonProps } from '@/utils/types/button-types';
import { FC } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styles from './Button.module.scss';
const Button: FC<ButtonProps> = ({
	type = 'button',
	name,
	extraClassNames = '',
	loading = false,
}) => {
	return (
		<button
			type={type}
			className={`${styles['button']} ${extraClassNames}`}
		>
			{loading && <AiOutlineLoading3Quarters className="animate-spin" />}
			{name}
		</button>
	);
};

export default Button;
