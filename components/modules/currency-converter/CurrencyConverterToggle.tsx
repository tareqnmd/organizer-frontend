import { Button } from '@/components/ui/button';
import { CurrencyConverterInputType } from '@/lib/helper/currency-converter';
import { ArrowLeftRight } from 'lucide-react';

const CurrencyConverterToggle = ({
	inputData,
	setInputData,
}: {
	inputData: CurrencyConverterInputType;
	setInputData: (data: CurrencyConverterInputType) => void;
}) => {
	const handleToggle = () => {
		setInputData({
			...inputData,
			from: inputData.to,
			to: inputData.from,
		});
	};
	return (
		<Button size="icon" variant="ghost" onClick={handleToggle}>
			<ArrowLeftRight className="h-6 w-6 shrink-0" />
		</Button>
	);
};

export default CurrencyConverterToggle;
