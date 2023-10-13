export interface InputProps {
	label: string;
	name: string;
	type: string;
	required: boolean;
	rows?: number;
	value?: any;
	extraClass?: string;
	placeholder?: string;
	getEvent: getEventProps;
}

export type getEventProps = (name: string, value: string) => void;