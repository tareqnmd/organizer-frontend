import { ZakatFormItems } from './form-items';

const getFieldNames = (category: string) => {
	return ZakatFormItems.find((item) => item.name === category)?.children.map(
		(child) => child.name,
	);
};

const calculateFieldValue = (
	fields: string[] | undefined,
	data: Record<string, number>,
) => {
	return fields?.reduce((acc, field) => acc + (data[field] ?? 0), 0) ?? 0;
};

export const calculateZakat = (fields: Record<string, number>) => {
	const assetFields = getFieldNames('assets');
	const liabilityFields = getFieldNames('liabilities');
	const nisabValue = fields.nisab ?? 0;
	const assetValue = calculateFieldValue(assetFields, fields);
	const liabilityValue = calculateFieldValue(liabilityFields, fields);

	if (assetValue <= nisabValue) {
		return 0;
	}

	const totalAssets = assetValue - liabilityValue;

	const zakatPercentage = 0.025;
	const zakatAmount = totalAssets * zakatPercentage;

	return zakatAmount;
};
