export type ZakatFieldType = {
	name: string;
	label: string;
	placeholder?: string;
};

export type ZakatFormItem = {
	name: string;
	label: string;
	children: ZakatFieldType[];
};
