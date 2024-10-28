import { ChildrenType } from '../shared';

export type AuthType =
	| 'login'
	| 'register'
	| 'reset_password'
	| 'forgot_password';

export type AuthContentLayoutPropsType = ChildrenType & {
	title: string;
	socialLogin?: boolean;
	anotherLink?: {
		href: string;
		label: string;
	};
	anotherLinkText?: string;
};
