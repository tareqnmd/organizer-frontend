export interface ButtonProps {
	type: 'reset' | 'submit' | 'button';
	name: string;
	extraClassNames?: string;
	loading: boolean;
	mutation?: boolean;
	auth?: boolean;
}