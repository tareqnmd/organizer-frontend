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
import {
	getFieldValue,
	getTotal,
	millionNumberFormat,
} from '../../utils/helper';
import MasterGridStyle from './Mastergrid.style';

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
		<MasterGridStyle>
			<Paper sx={{}}>
				<TableContainer sx={{ maxHeight: `calc(100vh - 170px)` }}>
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
										<TableCell
											sx={{ whiteSpace: 'nowrap' }}
											key={columnIndex}
										>
											{getFieldValue(item, column)}
										</TableCell>
									))}
								</TableRow>
							))}
							<TableRow>
								<TableCell
									colSpan={columns?.length - 2}
									className="fw-bold"
									align="right"
								>
									Total Amount
								</TableCell>
								<TableCell
									colSpan={2}
									className="fw-bold"
								>
									{millionNumberFormat(getTotal(filteredData))}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					labelRowsPerPage=""
					rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]}
					component="div"
					count={data?.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</MasterGridStyle>
	);
};

export default MasterGrid;
