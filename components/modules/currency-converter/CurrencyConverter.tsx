'use client';

import { Button } from '@/components/ui/button';
import {
	CurrencyConverterInputType,
	CurrencyConverterType,
	CurrencyType,
} from '@/lib/helper/currency-converter';
import { baseFetch } from '@/lib/utils';
import { useState } from 'react';
import { toast } from 'sonner';
import CurrencyConverterInput from './CurrencyConverterInput';
import CurrencyConverterResult from './CurrencyConverterResult';
import CurrencyConverterSelect from './CurrencyConverterSelect';
import CurrencyConverterToggle from './CurrencyConverterToggle';

const CurrencyConverter = ({ currencies }: { currencies: CurrencyType[] }) => {
	const [inputData, setInputData] = useState<CurrencyConverterInputType>({
		from: 'USD',
		to: 'BDT',
		amount: null,
	});
	const [result, setResult] = useState<CurrencyConverterType | null>(null);

	const handleConvert = async () => {
		if (inputData.from && inputData.to && inputData.amount) {
			const params = new URLSearchParams({
				from: inputData.from,
				to: inputData.to,
				amount: String(inputData.amount),
			});
			const { data: convertedAmount } = await baseFetch(
				`currency-converter/convert?${params.toString()}`,
			);
			setResult(convertedAmount);
		} else {
			toast.error('Please fill all the fields');
		}
	};

	return (
		<div className="container my-3 flex flex-col gap-3">
			<div className="grid items-center gap-3 md:grid-cols-3">
				<CurrencyConverterInput
					inputData={inputData}
					setInputData={setInputData}
				/>
				<div className="flex items-center gap-2 md:col-span-2">
					<CurrencyConverterSelect
						inputData={inputData}
						setInputData={setInputData}
						type="from"
						currencies={currencies}
					/>
					<CurrencyConverterToggle
						inputData={inputData}
						setInputData={setInputData}
					/>
					<CurrencyConverterSelect
						inputData={inputData}
						setInputData={setInputData}
						type="to"
						currencies={currencies}
					/>
				</div>
			</div>
			<Button onClick={handleConvert}>Convert</Button>
			{result && <CurrencyConverterResult result={result} />}
		</div>
	);
};

export default CurrencyConverter;
