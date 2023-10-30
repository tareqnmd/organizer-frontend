import TransactionsDetails from '../transactions/TransactionsDetails';

const Transactions = async ({ data }: any) => {
	return <TransactionsDetails transactions={data} />;
};

export default Transactions;
