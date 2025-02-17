import { ZakatCalculationType } from './enum';

export type ZakatFieldType = {
	name: string;
	label: string;
	placeholder?: string;
};

export type ZakatFormItem = {
	name: string;
	label: string;
	advanceMode: boolean;
	placeholder?: string;
};

export type ZakatField = {
	name: string;
	value: number;
	type: ZakatCalculationType;
};

export type ZakatResult = {
	due: number;
	isZakatApplicable: boolean;
};
