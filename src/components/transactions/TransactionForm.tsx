import { Box, Button, MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetTypesQuery } from '../../features/system/systemApi';
import { useAddTransactionMutation } from '../../features/transactions/transactionApi';
import { TypePropType } from '../../utils/common-types';

const TransactionForm = () => {
	const navigate = useNavigate();
	const [values, setValues] = useState({});
	const { data: types } = useGetTypesQuery({});
	const [transaction, { isSuccess }] = useAddTransactionMutation({});
	const inputHandler = (e: any) => {
		const { name, value } = e.target;
		setValues((prev) => ({
			...prev,
			[name]: name === 'amount' ? Number(value) : value ?? null,
		}));
	};
	const submitHandler = (e: any) => {
		e.preventDefault();
		transaction(values);
	};

	useEffect(() => {
		if (isSuccess) {
			navigate('/');
		}
	}, [isSuccess,navigate]);
	return (
		<Box
			component="form"
			className="input-fields"
			onSubmit={submitHandler}
		>
			<h3 className="section-header">Add Transaction</h3>
			<TextField
				required
				label="Name"
				name="name"
				autoComplete="off"
				variant="standard"
				onChange={inputHandler}
			/>
			<TextField
				required
				name="date"
				type="date"
				variant="standard"
				onChange={inputHandler}
			/>
			<TextField
				required
				name="type"
				label="Type"
				select
				variant="standard"
				onChange={inputHandler}
			>
				{types?.map((type: TypePropType) => (
					<MenuItem
						key={type.value}
						value={type.value}
					>
						{type.name}
					</MenuItem>
				))}
			</TextField>
			<TextField
				required
				name="amount"
				label="Amount"
				type="number"
				variant="standard"
				onChange={inputHandler}
			/>
			<TextField
				required
				name="details"
				label="Details"
				type="textarea"
				variant="standard"
				onChange={inputHandler}
			/>
			<Button
				type="submit"
				variant="contained"
				sx={{ marginTop: '20px' }}
			>
				Add Transaction
			</Button>
		</Box>
	);
};

export default TransactionForm;
