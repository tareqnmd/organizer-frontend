import CurrencyConverter from '@/components/modules/currency-converter/CurrencyConverter';
import { baseFetch } from '@/lib/utils';

const getCurrencies = async () => {
	const { data: currencies } = await baseFetch(
		'currency-converter/currencies',
	);
	return currencies;
};

const CurrencyConverterPage = async () => {
	const currencies = await getCurrencies();
	return <CurrencyConverter currencies={currencies} />;
};

export default CurrencyConverterPage;
