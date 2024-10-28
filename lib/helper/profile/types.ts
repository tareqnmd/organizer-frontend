import { ProfileTypeEnum, UserRoleEnum } from './enums';

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

