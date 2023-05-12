import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';

const MasterGrid = () => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>0</TableCell>
						<TableCell align="right">1</TableCell>
						<TableCell align="right">2</TableCell>
						<TableCell align="right">3</TableCell>
						<TableCell align="right">4</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>0</TableCell>
						<TableCell align="right">1</TableCell>
						<TableCell align="right">2</TableCell>
						<TableCell align="right">3</TableCell>
						<TableCell align="right">4</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MasterGrid;
