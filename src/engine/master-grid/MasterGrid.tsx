import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { GridPropType } from '../../utils/common-types';
import { getFieldValue } from '../../utils/helper';

const MasterGrid = ({ data, columns }: GridPropType) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						{columns?.map((column, index) => (
							<TableCell key={index}>{column?.title}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data?.map((item, rowIndex) => (
						<TableRow key={rowIndex}>
							{columns?.map((column, columnIndex) => (
								<TableCell key={columnIndex}>
									{getFieldValue(item, column)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MasterGrid;
