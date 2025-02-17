import { ZakatField } from './type';

export const calculateZakatDue = (fields: ZakatField[]) => {
	const nisab = fields.filter((field) => field.type === 'nisab');
	const assets = fields.filter((field) => field.type === 'assets');
	const liabilities = fields.filter((field) => field.type === 'liabilities');

	const nisabValue = nisab.reduce((acc, field) => acc + field.value, 0);
	const assetsValue = assets.reduce((acc, field) => acc + field.value, 0);
	const liabilitiesValue = liabilities.reduce(
		(acc, field) => acc + field.value,
		0,
	);

	const netAssets = assetsValue - liabilitiesValue;

	const zakatPercentage = 0.025;

	if (netAssets >= nisabValue) {
		const zakatAmount = netAssets * zakatPercentage;
		return {
			due: zakatAmount,
			isZakatApplicable: true,
		};
	} else {
		return {
			due: 0,
			isZakatApplicable: false,
		};
	}
};
