import TransactionForm from './TransactionForm';

const TransactionAdd = () => {
	return (
		<section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
			<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
				Add Transaction
			</h2>
			<TransactionForm />
		</section>
	);
};

export default TransactionAdd;
