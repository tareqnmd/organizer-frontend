import Date from './Date';
import styles from './Input.module.scss';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';

const FormInput = ({ register, input, extraClass }: any) => {
	const getTypes = (type: string) => {
		return type === 'select' ? (
			<Select
				input={input}
				register={register}
			/>
		) : type === 'textarea' ? (
			<Textarea
				input={input}
				register={register}
			/>
		) : type === 'date' ? (
			<Date
				input={input}
				register={register}
			/>
		) : (
			<Input
				input={input}
				register={register}
			/>
		);
	};
	return (
		<div className={`${styles['input-area']} ${extraClass}`}>
			<label htmlFor={input?.name}>
				{input?.label}
				{input?.required && ' *'}
			</label>
			{getTypes(input?.type)}
		</div>
	);
};

export default FormInput;
