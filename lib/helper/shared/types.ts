import { Control } from "react-hook-form";

export type ChildrenType = {
	children: React.ReactNode;
};

export type CustomFormInputType = {
	label: string;
	placeholder?: string;
	name: string;
	type: string;
	optionUrl?: string;
	options?: { value: string; id: string; label: string }[];
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
