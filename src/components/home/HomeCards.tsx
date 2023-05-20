import { CircularProgress, Grid } from '@mui/material';
import { useTransactionInfoQuery } from '../../features/transactions/transactionApi';
import { HomeCardProps } from '../../utils/common-types';
import HomeCard from './HomeCard';
import Error from '../ui/Error';

const HomeCards = () => {
	const { data, isSuccess, isError, isLoading } = useTransactionInfoQuery({});

	let content = null;
	if (isLoading) {
		content = <CircularProgress />;
	} else if (!isLoading && isError) {
		content = <Error />;
	} else if (!isLoading && isSuccess && data?.length > 0) {
		content = (
			<Grid
				container
				spacing={2}
			>
				{data?.map((item: HomeCardProps) => (
					<Grid
						key={item?.name}
						item
						xs={12}
						sm={6}
						lg={4}
					>
						<HomeCard info={item} />
					</Grid>
				))}
			</Grid>
		);
	}
	return content;
};

export default HomeCards;
