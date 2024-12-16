export type CurrencyConverterInputType = {
	from: string;
	to: string;
	amount: number | null;
};

export type CurrencyConverterType = {
	from: string;
	to: string;
	amountToConvert: number;
	convertedAmount: number;
};

export type CurrencyType = {
	label: string;
	value: string;
};
