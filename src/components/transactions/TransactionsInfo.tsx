import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import moneyImage from '../../assets/images/money-tree.jpg';
import { useTransactionInfoQuery } from '../../features/transactions/transactionApi';
import { millionNumberFormat } from '../../utils/helper';

const TransactionsInfo = () => {
	const { data, isSuccess, isError, isLoading } = useTransactionInfoQuery({});

	let content = null;
	if (isLoading) {
		content = <CircularProgress />;
	} else if (!isLoading && isError) {
		content = <>Error Found</>;
	} else if (!isLoading && isSuccess) {
		content = <>Amount : {millionNumberFormat(data?.currentValue)}</>;
	}
	return (
		<Card
			sx={{ maxWidth: 300, boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1);' }}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image={moneyImage}
					alt="Money Tree"
				/>
				<CardContent>
					<Typography
						variant="h5"
						component="div"
						className="text-center"
					>
						{content}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className="card-link">
				<Link to="/transactions">Transaction History</Link>
			</CardActions>
		</Card>
	);
};

export default TransactionsInfo;
