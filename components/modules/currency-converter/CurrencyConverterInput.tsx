import { Input } from '@/components/ui/input';
import { CurrencyConverterInputType } from '@/lib/helper/currency-converter';

const CurrencyConverterInput = ({
	inputData,
	setInputData,
}: {
	inputData: CurrencyConverterInputType;
	setInputData: (data: CurrencyConverterInputType) => void;
}) => {
	return (
		<div className="relative">
			<span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: inputData.from,
				})
					.format(0)
					.replace('0.00', '')}
			</span>
			<Input
				className="pl-10"
				placeholder="Enter amount"
				type="number"
				min={0}
				defaultValue={inputData.amount ?? ''}
				onChange={(e) =>
					setInputData({
						...inputData,
						amount: Number(e.target.value),
					})
				}
			/>
		</div>
	);
};

export default CurrencyConverterInput;
