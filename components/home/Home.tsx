import TransactionsOverview from '@/components/transactions/overview/TransactionsOverview';
import TransactionSamples from '@/components/transactions/sample/TransactionSamples';

const Home = () => {
	return (
		<section className="grid grid-cols-2">
			<TransactionsOverview />
			<TransactionSamples />
		</section>
	);
};

export default Home;
