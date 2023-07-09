import TransactionForm from './TransactionForm';

const TransactionAdd = () => {
	return (
		<section className="max-w-4xl p-6 mx-auto bg-[#0b2447] rounded-md shadow-md">
			<h2 className="text-lg font-semibold text-white">
				Add Transaction
			</h2>
			<TransactionForm />
		</section>
	);
};

export default TransactionAdd;
