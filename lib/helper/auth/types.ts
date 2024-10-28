import { Session, User } from 'next-auth';
import * as z from 'zod';
import { ChildrenType } from '../shared';
import {
	ForgotPasswordSchema,
	LoginSchema,
	RegistrationSchema,
	ResetPasswordSchema,
} from './schemas';

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

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type RegisterSchemaType = z.infer<typeof RegistrationSchema>;
export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

export type NextAuthUser = User & {
	role: string;
	status: string;
};

export type NextAuthSession = Session & {
	name: string;
};
