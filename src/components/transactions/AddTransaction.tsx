import { Box, Button, TextField } from '@mui/material';

const AddTransaction = () => {
	const inputHandler = () => {};
	const submitHandler = () => {};
	return (
		<Box
			component="form"
			onSubmit={submitHandler}
		>
			<TextField
				required
				label="Name"
				name="name"
				autoComplete="off"
				onChange={inputHandler}
			/>
			<TextField
				required
				name="password"
				label="date"
				type="date"
				onChange={inputHandler}
			/>
			<TextField
				required
				name="type"
				label="Type"
				type="select"
				onChange={inputHandler}
			/>
			<TextField
				required
				name="amount"
				label="Amount"
				type="number"
				onChange={inputHandler}
			/>
			<TextField
				required
				name="details"
				label="Details"
				type="textarea"
				onChange={inputHandler}
			/>
			<Button
				type="submit"
				variant="contained"
			>
				Add Transaction
			</Button>
		</Box>
	);
};

export default AddTransaction;
