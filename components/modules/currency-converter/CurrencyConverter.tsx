'use client';

import { Button } from '@/components/ui/button';
import {
	CurrencyConverterInputType,
	CurrencyConverterType,
	CurrencyType,
} from '@/lib/helper/currency-converter';
import { baseFetch } from '@/lib/utils';
import { sendGTMEvent } from '@next/third-parties/google';
import { Loader } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import FreeAPIInfo from '../FreeAPIInfo';
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
	const [isLoading, setIsLoading] = useState(false);
	const [result, setResult] = useState<CurrencyConverterType | null>(null);

	const handleConvert = async () => {
		if (inputData.from && inputData.to && inputData.amount) {
			setIsLoading(true);
			sendGTMEvent(
				'currencyConverter',
				`convert_${inputData.from}_${inputData.to}_${inputData.amount}`,
			);
			const params = new URLSearchParams({
				from: inputData.from,
				to: inputData.to,
				amount: String(inputData.amount),
			});
			const { data: convertedAmount } = await baseFetch(
				`currency-converter/convert?${params.toString()}`,
			);
			setResult(convertedAmount);
			setIsLoading(false);
		} else {
			toast.error('Please fill all the fields');
		}
	};

	return (
		<div className="container my-3 flex flex-col gap-3">
			<FreeAPIInfo
				apiName="RapidAPI(Currency Converter)"
				apiLink="https://rapidapi.com/not-null-solutions1-not-null-solutions-default/api/currency-converter18"
			/>
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
			<Button
				disabled={
					!inputData.from ||
					!inputData.to ||
					!inputData.amount ||
					(inputData.from === result?.from &&
						inputData.to === result?.to &&
						inputData.amount === result?.amountToConvert)
				}
				onClick={handleConvert}
				className="flex items-center gap-1"
			>
				{isLoading && <Loader className="animate-spin" size={16} />}
				Convert
			</Button>
			{result && <CurrencyConverterResult result={result} />}
		</div>
	);
};

export default CurrencyConverter;
