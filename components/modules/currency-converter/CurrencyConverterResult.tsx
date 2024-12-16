import { CurrencyConverterType } from '@/lib/helper/currency-converter';
import { ArrowRight, Equal } from 'lucide-react';

const CurrencyConverterResult = ({
	result,
}: {
	result: CurrencyConverterType;
}) => {
	const amountTOFourDecimal = (amount: number) => {
		return new Intl.NumberFormat('en-US', {
			style: 'decimal',
			minimumFractionDigits: 4,
			maximumFractionDigits: 4,
		}).format(amount);
	};
	return (
		<div className="flex flex-col gap-2 rounded-md border border-dark/25 p-3 dark:border-light/25">
			<strong>Converted Result:</strong>
			<div className="flex items-center gap-2">
				<small>
					{result.amountToConvert} {result.from}
				</small>
				<ArrowRight className="h-3 w-3 shrink-0" />
				<div className="flex items-center gap-1">
					<strong>
						{amountTOFourDecimal(result.convertedAmount)}
					</strong>
					<strong>{result.to}</strong>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<div className="flex items-center gap-2">
					<small>1 {result.from}</small>
					<Equal className="h-3 w-3 shrink-0" />
					<div className="flex items-center gap-1">
						<small>
							{amountTOFourDecimal(
								result.convertedAmount / result.amountToConvert,
							)}
						</small>
						<small>{result.to}</small>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<small>1 {result.to}</small>
					<Equal className="h-3 w-3 shrink-0" />
					<div className="flex items-center gap-1">
						<small>
							{amountTOFourDecimal(
								result.amountToConvert / result.convertedAmount,
							)}
						</small>
						<small>{result.from}</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrencyConverterResult;
