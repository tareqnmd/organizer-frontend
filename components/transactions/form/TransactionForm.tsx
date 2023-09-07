'use client';
import Modal from '@/components/modal/Modal';
import Button from '@/components/shared/button/Button';
import FormInput from '@/components/shared/input/FormItem';
import {
	useAddTransactionMutation,
	useGetTransactionQuery,
} from '@/features/transactions/transactions-api';
import { getUserState } from '@/features/user/user-slice';
import { getError } from '@/utils/helpers';
import { transactionFormInputs } from '@/utils/helpers/transaction-helper';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const TransactionForm = ({ setModalType, modalType, transactionId }: any) => {
	const { register, setValue, handleSubmit } = useForm();
	const { userId } = useSelector(getUserState);
	const { data: transaction } = useGetTransactionQuery(transactionId, {
		skip: !transactionId,
	});
	const [addTransaction, { isLoading, isSuccess, isError, error }] =
		useAddTransactionMutation();

	const transactionMutation = (data: any) => {
		addTransaction({ ...data, userId });
	};

	const getColumnWidth = (name: string) => {
		if (['description', 'typeId'].includes(name)) {
			return 'col-span-2';
		}
		return 'col-span-2 md:col-span-1';
	};

	const closeModal = () => {
		setModalType('');
	};

	useEffect(() => {
		if (transaction?._id) {
			for (const key in transaction) {
				setValue(
					key,
					key === 'date'
						? dayjs(transaction[key]).format('YYYY-MM-DD')
						: transaction[key]
				);
			}
		}
	}, [setValue, transaction]);

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Added', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			setModalType('');
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error, setModalType]);

	return (
		<Modal
			title="Create Transaction"
			open={modalType === 'form'}
			onCancel={closeModal}
		>
			<form
				className="p-3 bg-[#0b2447] rounded-md shadow-md"
				onSubmit={handleSubmit(transactionMutation)}
			>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{transactionFormInputs?.map((input) => (
						<FormInput
							key={input?.name}
							input={input}
							register={register}
							extraClass={`${getColumnWidth(
								input.name
							)} input-label-white`}
						/>
					))}
				</div>
				<div className="flex justify-end mt-4">
					<Button
						type="submit"
						name={`${transactionId ? 'Update' : 'Add'} Transaction`}
						loading={isLoading}
						mutation={true}
						extraClassNames={`!bg-white !text-black font-semibold`}
					/>
				</div>
			</form>
		</Modal>
	);
};

export default TransactionForm;
