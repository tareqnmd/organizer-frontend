import TransactionForm from './TransactionForm';

const TransactionAdd = () => {
	return (
		<section className="grid place-items-center h-full">
			<div className="max-w-4xl p-6  bg-[#0b2447] rounded-md shadow-md">
				<h2 className="text-lg font-semibold text-white">
					Add Transaction
				</h2>
				<TransactionForm />
			</div>
		</section>
	);
};

export default TransactionAdd;
