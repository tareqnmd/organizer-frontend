import { GridColumnProp } from './common-types';

export const getFieldValue = (item: any, column: GridColumnProp) => {
	const dataIndex = column.dataIndex;
	return item[dataIndex];
};
