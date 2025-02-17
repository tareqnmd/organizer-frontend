import { ZakatResult } from '../helper';
import ZakatCardWrapper from './ZakatCardWrapper';

const ZakatCalculationResult = ({ result }: { result: ZakatResult | null }) => {
	if (!result) return null;
	const { due, isZakatApplicable } = result;
	return (
		<ZakatCardWrapper
			extraClass="col-span-full"
			headerTitle="Zakat Calculation Result"
		>
			{isZakatApplicable ? (
				<div className="flex flex-col gap-1">
					<h4 className="text-lg font-medium">Zakat Amount</h4>
					<h2 className="text-2xl font-bold">{due}</h2>
				</div>
			) : (
				<div className="text-center text-lg font-medium">
					You are not eligible for Zakat
				</div>
			)}
		</ZakatCardWrapper>
	);
};

export default ZakatCalculationResult;
