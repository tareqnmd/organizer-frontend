import TransactionFilter from './TransactionFilter';
import TransactionMonthWise from './TransactionMonthWise';
const TransactionsInfo = () => {
	return (
		<div className="flex justify-between mb-2">
			<TransactionFilter />
			<TransactionMonthWise />
		</div>
	);
};

export default TransactionsInfo;
