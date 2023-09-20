import TransactionFilter from './TransactionFilter';
import TransactionMonthWise from './TransactionMonthWise';
const TransactionsInfo = () => {
	return (
		<div className="flex justify-between">
			<TransactionFilter />
			<TransactionMonthWise />
		</div>
	);
};

export default TransactionsInfo;
