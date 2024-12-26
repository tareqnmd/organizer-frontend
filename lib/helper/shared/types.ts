import { FormInputType } from './enum';

export type ChildrenType = {
	children: React.ReactNode;
};

export type InputOptionType = {
	value: string | boolean;
	label: string;
};

export type CustomFormInputType = {
	label?: string;
	placeholder?: string;
	name: string;
	type?: FormInputType;
	optionUrl?: string;
	staticOptions?: InputOptionType[];
	description?: string;
	fieldRequired?: boolean;
	disabled?: boolean;
	hidden?: boolean;
	className?: string;
};

export type InputFieldsType = {
	control: any;
	extraClassName?: string;
};

export type CustomFormInputPropsType = InputFieldsType & {
	input: CustomFormInputType;
};

export type DateTimeType = {
	date: string;
	time: {
		hour: string;
		minute: string;
		second: string;
	};
};

