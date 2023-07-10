import TransactionsOverview from '../TransactionsOverview';
import TransactionForm from './TransactionForm';

const TransactionAdd = () => {
	return (
		<section className="grid grid-cols-2">
			<div>
				<TransactionsOverview />
			</div>
			<div className="p-6 bg-[#0b2447] rounded-md shadow-md">
				<h2 className="text-lg font-semibold text-white">
					Add Transaction
				</h2>
				<TransactionForm />
			</div>
		</section>
	);
};

export default TransactionAdd;
