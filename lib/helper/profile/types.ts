import * as z from 'zod';
import { ProfileTypeEnum, UserRoleEnum } from './enums';
import {
	UserEditSchemaWithoutPassword,
	UserEditSchemaWithPassword,
} from './schemas';

export type ProfileType = ProfileTypeEnum;

export type UserType = {
	id: string;
	email: string;
	name: string;
	image: string;
	role: UserRoleEnum;
};

export type UserSessionType = {
	user: UserType;
};

export type UserEditSchemaWithPasswordType = z.infer<
	typeof UserEditSchemaWithPassword
>;

export type UserEditSchemaWithoutPasswordType = z.infer<
	typeof UserEditSchemaWithoutPassword
>;

