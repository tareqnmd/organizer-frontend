import CurrencyConverter from '@/components/modules/currency-converter/CurrencyConverter';
import { baseFetch, nextProperties } from '@/lib/utils';

const getCurrencies = async () => {
	const { data: currencies } = await baseFetch(
		'currency-converter/currencies',
		nextProperties({}),
	);
	return currencies;
};

const CurrencyConverterPage = async () => {
	const currencies = await getCurrencies();
	return <CurrencyConverter currencies={currencies} />;
};

export default CurrencyConverterPage;
