import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Currency Converter',
		default: 'Currency Converter',
	},
};

const CurrencyConverterLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return children;
};

export default CurrencyConverterLayout;
