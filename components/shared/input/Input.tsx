'use client';
import { useGetTypesQuery } from '@/features/type/type-api';
import { InputProps } from '@/utils/types/input-types';
import { TransactionTypeOptionType } from '@/utils/types/transaction-types';
import { ChangeEvent, FC } from 'react';
import styles from './Input.module.scss';

const Input: FC<InputProps> = ({
	label,
	name,
	required,
	type = 'text',
	rows,
	placeholder,
	value,
	extraClass = '',
	getEvent,
	...rest
}) => {
	const { data: types } = useGetTypesQuery(
		{},
		{
			skip: type !== 'select',
		}
	);

	const inputChangeHandler = (
		event: ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = event.target;
		getEvent(name, value);
	};

	const getTypes = (type: string) => {
		let InpElm;
		switch (type) {
			case 'select':
				InpElm = (
					<select
						name={name}
						required={required}
						onChange={inputChangeHandler}
						value={value ?? null}
					>
						<option
							disabled
							selected
							value=""
						>
							Select Type
						</option>
						{types?.map((type: TransactionTypeOptionType) => (
							<option
								key={type._id}
								value={type._id}
							>
								{type.name}
							</option>
						))}
					</select>
				);
				break;
			case 'textarea':
				InpElm = (
					<textarea
						name={name}
						required={required}
						rows={rows}
						onChange={inputChangeHandler}
						value={value ?? null}
						placeholder={placeholder}
					/>
				);
				break;
			default:
				InpElm = (
					<input
						name={name}
						type={type}
						required={required}
						onChange={inputChangeHandler}
						placeholder={placeholder}
						value={value ?? null}
						{...rest}
					/>
				);
		}
		return InpElm;
	};

	return (
		<div className={`${styles['input-area']} ${extraClass}`}>
			<label htmlFor={name}>
				{label}
				{required && ' *'}
			</label>
			{getTypes(type)}
		</div>
	);
};

export default Input;
