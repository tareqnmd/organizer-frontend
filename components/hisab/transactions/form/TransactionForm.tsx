'use client';
import Button from '@/components/ui/button/Button';
import FormInput from '@/components/ui/input/FormItem';
import Loading from '@/components/ui/loader/Loading';
import Modal from '@/components/ui/modal/Modal';
import {
	useAddTransactionMutation,
	useEditTransactionMutation,
	useGetTransactionQuery,
} from '@/features/transactions/transactions-api';
import { getUserState } from '@/features/user/user-slice';
import { dateInputFormat, getError } from '@/utils/helpers';
import { transactionFormInputs } from '@/utils/helpers/transaction-helper';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup
	.object({
		typeId: yup.string().required(),
		amount: yup.number().typeError('amount is required'),
		date: yup.date().typeError('date is required'),
		description: yup.string().required(),
	})
	.required();

const TransactionForm = ({ setModalType, modalType, transactionId }: any) => {
	const {
		register,
		setValue,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm<any>({
		resolver: yupResolver(schema),
	});
	const { userId } = useSelector(getUserState);
	const { data: transaction, isFetching } = useGetTransactionQuery(
		transactionId,
		{
			skip: !transactionId,
		}
	);
	const [
		addTransaction,
		{
			isLoading: addIsLoading,
			isSuccess: addIsSuccess,
			isError: addIsError,
			error: addError,
		},
	] = useAddTransactionMutation();
	const [
		editTransaction,
		{
			isLoading: editIsLoading,
			isSuccess: editIsSuccess,
			isError: editIsError,
			error: editError,
		},
	] = useEditTransactionMutation();

	watch('date', (value: Date) => {
		return dayjs(value).format('YYYY-MM-DD');
	});

	const transactionMutation = (data: any) => {
		transactionId
			? editTransaction({
					id: transactionId,
					data: {
						...data,
						date: dayjs(data.date).format('YYYY-MM-DD'),
						userId,
					},
			  })
			: addTransaction({
					...data,
					date: dayjs(data.date).format('YYYY-MM-DD'),
					userId,
			  });
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
			setValue('date', dateInputFormat(transaction.date));
			setValue('amount', transaction.amount);
			setValue('typeId', transaction.typeId);
			setValue('description', transaction.description);
		} else {
			setValue('date', dateInputFormat(new Date()));
		}
	}, [setValue, transaction]);

	useEffect(() => {
		if (addIsSuccess) {
			toast.success('Successfully Added', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			setModalType('');
			reset();
		}
		if (addIsError) {
			toast.error(getError(addError), { position: 'top-center' });
		}
	}, [addIsSuccess, addIsError, addError, setModalType, reset]);

	useEffect(() => {
		if (editIsSuccess) {
			toast.success('Successfully Updated', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			setModalType('');
			reset();
		}
		if (editIsError) {
			toast.error(getError(editError), { position: 'top-center' });
		}
	}, [editIsSuccess, editIsError, editError, setModalType, reset]);

	return (
		<Modal
			title={`${transactionId ? 'Update' : 'Create'} Transaction`}
			open={modalType === 'form'}
			onCancel={closeModal}
		>
			<Loading loading={isFetching}>
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
								errors={errors}
								extraClass={`${getColumnWidth(
									input.name
								)} input-label-white`}
							/>
						))}
					</div>
					<div className="flex justify-end mt-4">
						<Button
							type="submit"
							name={`${
								transactionId ? 'Update' : 'Create'
							} Transaction`}
							loading={addIsLoading || editIsLoading}
							mutation={true}
							extraClassNames={`!bg-white !text-black font-semibold`}
						/>
					</div>
				</form>
			</Loading>
		</Modal>
	);
};

export default TransactionForm;
