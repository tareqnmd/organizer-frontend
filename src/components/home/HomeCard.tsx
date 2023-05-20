import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import expenseImg from '../../assets/images/expense.png';
import incomeImg from '../../assets/images/income.png';
import totalImg from '../../assets/images/total.png';
import { HomeCardProps } from '../../utils/common-types';
import { homeCardName, millionNumberFormat } from '../../utils/helper';
import styles from './HomeCard.module.scss';

const HomeCard = ({ info }: { info: HomeCardProps }) => {
	return (
		<Card className={styles['home-card']}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image={
						info?.name === 'totalIncome'
							? incomeImg
							: info?.name === 'totalExpense'
							? expenseImg
							: totalImg
					}
					alt="Money Tree"
				/>
				<CardContent>
					<Typography
						variant="h5"
						component="div"
						className="text-center"
					>
						{homeCardName(info?.name)}
					</Typography>
					<Typography
						variant="h6"
						component="div"
						className="text-center"
					>
						Amount : {millionNumberFormat(info?.amount)}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className="card-link">
				<Link to="/transactions">Transaction History</Link>
			</CardActions>
		</Card>
	);
};

export default HomeCard;
