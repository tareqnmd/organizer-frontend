import { Card } from '@mui/material';
import { useTransactionInfoQuery } from '../../features/transactions/transactionApi';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import { millionNumberFormat } from '../../utils/helper';

const TransactionsInfo = () => {
	const { data, isSuccess, isError, isLoading } = useTransactionInfoQuery({});

	let content = null;
	if (isLoading) {
		content = <Loading />;
	} else if (!isLoading && isError) {
		content = <Error message={'Error found'} />;
	} else if (!isLoading && isSuccess) {
		content = (
			<Card
				className="amount-info"
				variant="outlined"
			>
				<h3>Amount : {millionNumberFormat(data?.currentValue)}</h3>
				<h3>Total Transaction : {data?.totalTransactions}</h3>
			</Card>
		);
	}
	return content;
};

export default TransactionsInfo;
