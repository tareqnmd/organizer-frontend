import { TransactionType } from './Transactions';

const TransactionSnippet = ({
	transaction,
}: {
	transaction: TransactionType;
}) => {
	return (
		<div>
			{transaction.type}
			{transaction.typeName}
			{transaction.amount}
			{transaction.description}
		</div>
	);
};

export default TransactionSnippet;
