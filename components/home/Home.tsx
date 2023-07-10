import TransactionsOverview from '@/components/transactions/overview/TransactionsOverview';
import RecentTransactions from '../transactions/sample/RecentTransactions';

const Home = () => {
	return (
		<section className="grid grid-cols-2 gap-4">
			<TransactionsOverview />
			<RecentTransactions />
		</section>
	);
};

export default Home;
