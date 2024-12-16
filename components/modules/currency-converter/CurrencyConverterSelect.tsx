import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	CurrencyConverterInputType,
	CurrencyType,
} from '@/lib/helper/currency-converter';

const CurrencyConverterSelect = ({
	currencies,
	type,
	setInputData,
	inputData,
}: {
	currencies: CurrencyType[];
	type: 'from' | 'to';
	setInputData: (data: CurrencyConverterInputType) => void;
	inputData: CurrencyConverterInputType;
}) => {
	return (
		<Select
			onValueChange={(value) => {
				setInputData({ ...inputData, [type]: value });
			}}
			value={type === 'to' ? inputData.to : inputData.from}
		>
			<SelectTrigger>
				<SelectValue
					placeholder={`${type === 'to' ? 'To' : 'From'} currency`}
				/>
			</SelectTrigger>
			<SelectContent>
				{currencies.map((currency) => (
					<SelectItem key={currency.value} value={currency.value}>
						{currency.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default CurrencyConverterSelect;
