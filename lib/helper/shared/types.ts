import { Control } from 'react-hook-form';
import { FormInputType } from './enum';

export type ChildrenType = {
	children: React.ReactNode;
};

export type InputOptionType = {
	value: string;
	label: string;
};

export type CustomFormInputType = {
	label: string;
	placeholder?: string;
	name: string;
	type: FormInputType;
	optionUrl?: string;
	staticOptions?: InputOptionType[];
	description: string;
	required?: boolean;
};

export type InputFieldsType = {
	control: Control;
	extraClassName?: string;
};

export type CustomFormInputPropsType = InputFieldsType & {
	input: CustomFormInputType;
};
