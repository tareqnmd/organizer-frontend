import Modal from '@/components/modal/Modal';
import TransactionsDetail from '../TransactionsDetail';

const TransactionView = ({ modalType, setModalType, transactionId }: any) => {
	return (
		<Modal
			title="Transaction Info"
			open={modalType === 'view'}
			onCancel={() => {
				setModalType('');
			}}
		>
			<TransactionsDetail transactionId={transactionId} />
		</Modal>
	);
};

export default TransactionView;
