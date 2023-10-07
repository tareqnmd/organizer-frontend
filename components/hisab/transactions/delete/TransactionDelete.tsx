import Modal from '@/components/ui/modal/Modal';
import ModalFooterButtons from '@/components/ui/modal/ModalFooterButtons';
import { useDeleteTransactionMutation } from '@/features/transactions/transactions-api';
import { getError } from '@/utils/helpers';
import { useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import TransactionsDetail from '../TransactionsDetail';

const TransactionDelete = ({ modalType, setModalType, transactionId }: any) => {
	const [deleteTransaction, { isSuccess, isLoading, isError, error }] =
		useDeleteTransactionMutation();

	const deleteTransactionHandler = () => {
		deleteTransaction(transactionId);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Deleted', {
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
			title="Delete Transaction"
			open={modalType === 'delete'}
			onCancel={() => {
				setModalType('');
			}}
			footer={
				<ModalFooterButtons>
					<button
						disabled={isLoading}
						onClick={deleteTransactionHandler}
						className="!bg-[red]"
					>
						<AiFillDelete /> Delete
					</button>
				</ModalFooterButtons>
			}
		>
			<TransactionsDetail transactionId={transactionId} />
		</Modal>
	);
};

export default TransactionDelete;
