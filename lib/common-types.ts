export interface OnChangeHandler {
	(e: any): void;
}

export interface User {
	_id: string;
	name: string;
	email: string;
	status: Number;
	avatar: string;
}
