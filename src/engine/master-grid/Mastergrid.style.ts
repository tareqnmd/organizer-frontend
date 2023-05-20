import styled from '@emotion/styled';

const MasterGridStyle = styled.div`
	.table-head {
		background: #222222;
	}

	.table-head th {
		color: white;
		font-weight: 700;
		border-left: 1px solid #e4e4e450;
		background-color: #222;
	}

	.table-head th:first-child {
		border-left: none;
	}

	.expense-row {
		background: #f5767688;
	}

	.expense-row td {
		border-left: 1px solid #2b2b2b50;
	}

	.expense-row td:first-child {
		border-left: none;
	}

	.income-row {
		background: #8ef0a788;
	}

	.income-row td {
		border-left: 1px solid #2b2b2b50;
	}

	.income-row td:first-child {
		border-left: none;
	}
`;

export default MasterGridStyle;
