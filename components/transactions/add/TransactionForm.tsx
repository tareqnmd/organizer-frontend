'use client';
import Button from '@/components/shared/button/Button';
import Input from '@/components/shared/input/Input';
import { useAddTransactionMutation } from '@/features/transactions/transactions-api';
import { transactionFormInputs } from '@/utils/helpers/transaction-helper';
import { getEventProps } from '@/utils/types/input-types';
import { FormEvent, useState } from 'react';

const TransactionForm = () => {
	const [inputs] = useState(transactionFormInputs);
	const [inputsValue, setInputsValue] = useState({});
	const [addTransaction, {}] = useAddTransactionMutation();
	const getEvent: getEventProps = (name, value) => {
		setInputsValue((prev) => ({
			...prev,
			[name]: name === 'amount' ? Number(value ?? 0) : value,
		}));
	};

	const transactionMutation = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addTransaction(inputsValue);
	};

	return (
		<form onSubmit={transactionMutation}>
			<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
				{inputs.map((input) => (
					<Input
						key={input.name}
						getEvent={getEvent}
						{...input}
					/>
				))}
			</div>
			<div className="flex justify-end mt-6">
				<Button
					type="submit"
					name="Add Transaction"
				/>
			</div>
		</form>
	);
};

export default TransactionForm;
