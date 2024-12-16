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
		<div className="relative flex items-stretch overflow-hidden rounded-md border border-dark/10 dark:border-light/10">
			<span className="grid min-w-[60px] place-items-center bg-dark px-3 text-light dark:bg-light dark:text-dark">
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: inputData.from,
				})
					.format(0)
					.replace('0.00', '')}
			</span>
			<Input
				className="h-[38px] border-none pl-10 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
