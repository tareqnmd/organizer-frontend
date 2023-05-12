export type userValue = { user: { username: string } };

export type GridColumnsProp = {
	title: string;
	dataIndex: string;
	type: string;
}[];

export type GridColumnProp = {
	title: string;
	dataIndex: string;
	type: string;
};

export type GridPropType = {
	data: any[];
	columns: GridColumnsProp;
};
