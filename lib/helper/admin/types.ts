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
	googleLinked: boolean;
	githubLinked: boolean;
	emailLinked: boolean;
	image: string;
	lastLoginTime: string | null;
};
