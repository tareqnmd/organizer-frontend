'use client';
import Button from '@/components/shared/button/Button';
import Input from '@/components/shared/input/Input';
import { useAddTransactionMutation } from '@/features/transactions/transactions-api';
import { getUserState } from '@/features/user/user-slice';
import { getError } from '@/utils/helpers';
import { transactionFormInputs } from '@/utils/helpers/transaction-helper';
import { getEventProps } from '@/utils/types/input-types';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const TransactionForm = () => {
	const router = useRouter();
	const [inputs] = useState(transactionFormInputs);
	const [inputsValue, setInputsValue] = useState({});
	const [addTransaction, { isLoading, isSuccess, isError, error }] =
		useAddTransactionMutation();
	const { userId } = useSelector(getUserState);
	const getEvent: getEventProps = (name, value) => {
		setInputsValue((prev) => ({
			...prev,
			[name]: name === 'amount' ? Number(value ?? 0) : value,
		}));
	};

	const transactionMutation = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addTransaction({ ...inputsValue, userId });
	};

	const getColumnWidth = (name: string) => {
		if (['description', 'typeId'].includes(name)) {
			return 'col-span-2';
		}
		return 'col-span-2 md:col-span-1';
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Added', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			router.push('/transactions');
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error, router]);

	return (
		<form onSubmit={transactionMutation}>
			<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
				{inputs.map((input) => (
					<Input
						key={input.name}
						getEvent={getEvent}
						extraClass={`${getColumnWidth(
							input.name
						)} input-label-white`}
						{...input}
					/>
				))}
			</div>
			<div className="flex justify-end mt-6">
				<Button
					type="submit"
					name="Add Transaction"
					loading={isLoading}
					mutation={true}
					extraClassNames={`!bg-white !text-black font-semibold`}
				/>
			</div>
		</form>
	);
};

export default TransactionForm;
