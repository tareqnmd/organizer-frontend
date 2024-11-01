export type UsersParamType = {
	page?: string;
	limit?: string;
	sort?: string;
	order?: string;
};

export type AdminUserType = {
	id: string;
	name: string;
	email: string;
	role: string;
	googleId: string;
};
