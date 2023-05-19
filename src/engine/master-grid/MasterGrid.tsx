import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { GridDataType, GridPropType } from '../../utils/common-types';
import { getFieldValue } from '../../utils/helper';

const MasterGrid = ({ data, columns }: GridPropType) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [filteredData, setFilteredData] = useState<GridDataType>([]);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	useEffect(() => {
		if (data?.length > 0) {
			const updatedData = data.slice(
				page * rowsPerPage,
				page * rowsPerPage + rowsPerPage
			);
			setFilteredData([...updatedData]);
		}
	}, [data, rowsPerPage, page]);

	return (
		<Paper>
			<TableContainer sx={{ maxHeight: `calc(100vh - 160px)` }}>
				<Table
					size="small"
					stickyHeader
				>
					<TableHead className="table-head">
						<TableRow>
							{columns?.map((column, index) => (
								<TableCell key={index}>{column?.title}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredData?.map((item, rowIndex) => (
							<TableRow
								className={`${item?.type.toLowerCase()}-row`}
								key={rowIndex}
							>
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
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={data?.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};

export default MasterGrid;
