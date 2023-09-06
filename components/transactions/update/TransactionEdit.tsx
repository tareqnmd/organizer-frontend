'use client';
import Modal from '@/components/modal/Modal';
import Button from '@/components/shared/button/Button';
import Input from '@/components/shared/input/Input';
import {
	useEditTransactionMutation,
	useGetTransactionQuery,
} from '@/features/transactions/transactions-api';
import { getUserState } from '@/features/user/user-slice';
import { getError } from '@/utils/helpers';
import { transactionFormInputs } from '@/utils/helpers/transaction-helper';
import { getEventProps } from '@/utils/types/input-types';
import { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
const TransactionEdit = ({ editModal, setEditModal, editId }: any) => {
	const [inputs, setInputs] = useState(transactionFormInputs);
	const [inputsValue, setInputsValue] = useState({});
	const [editTransaction, { isLoading, isSuccess, isError, error }] =
		useEditTransactionMutation();
	const { data: transaction } = useGetTransactionQuery(editId, {
		skip: !editId,
	});
	const { userId } = useSelector(getUserState);
	const getEvent: getEventProps = (name, value) => {
		setInputsValue((prev) => ({
			...prev,
			[name]: name === 'amount' ? Number(value ?? 0) : value,
		}));
	};

	const transactionMutation = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		editTransaction({ ...inputsValue, userId });
	};

	const getColumnWidth = (name: string) => {
		if (['description', 'typeId'].includes(name)) {
			return 'col-span-2';
		}
		return 'col-span-2 md:col-span-1';
	};

	useEffect(() => {
		if (transaction?._id) {
			setInputs(
				inputs.map((item) => ({
					...item,
					value: transaction[item.name],
				}))
			);
		}
	}, [transaction]);

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Updated', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			setEditModal(false);
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error, setEditModal]);

	return (
		<Modal
			title="Edit Transaction"
			open={editModal}
			onCancel={() => {
				setEditModal(false);
			}}
		>
			<div className="p-3 bg-[#0b2447] rounded-md shadow-md">
				<form onSubmit={transactionMutation}>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
					<div className="flex justify-end mt-4">
						<Button
							type="submit"
							name="Add Transaction"
							loading={isLoading}
							mutation={true}
							extraClassNames={`!bg-white !text-black font-semibold`}
						/>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default TransactionEdit;
