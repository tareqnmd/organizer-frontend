import { Control } from 'react-hook-form';

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
	type: string;
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
	control: any;
	extraClassName?: string;
};
