import Date from './Date';
import styles from './FormItem.module.scss';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import TextEditor from './TextEditor';
import Textarea from './Textarea';

const FormInput = ({ register, input, errors, extraClass, control }: any) => {
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
		) : type === 'radio' ? (
			<Radio
				input={input}
				register={register}
			/>
		) : type === 'editor' ? (
			<TextEditor
				input={input}
				control={control}
			/>
		) : (
			<Input
				input={input}
				register={register}
			/>
		);
	};
	return (
		<div
			className={`${styles['input-area']} form-item ${extraClass ?? ''}`}
		>
			<div>
				<label htmlFor={input?.name}>
					{input?.label}
					{input?.required && ' *'}
				</label>
				{getTypes(input?.type)}
			</div>
			<p className="text-red-500 font-bold mt-2">
				{errors[input?.name]?.message}
			</p>
		</div>
	);
};

export default FormInput;
