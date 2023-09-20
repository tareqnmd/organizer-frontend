'use client';
import Table from '@/components/ui/table/Table';
import { getTransactionsState } from '@/features/transactions/transactions-slice';
import {
	getFilteredTransactionType,
	transactionTableColumns,
} from '@/utils/helpers/transaction-helper';
import { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import TransactionDelete from '../delete/TransactionDelete';
import TransactionForm from '../form/TransactionForm';
import TransactionView from '../view/TransactionView';
const TransactionTable = () => {
	const [modalType, setModalType] = useState('');
	const [transactionId, setTransactionId] = useState('');
	const { transactions, filterType } = useSelector(getTransactionsState);

	const transactionAction = (type: string, item: any) => {
		setTransactionId(item._id);
		setModalType(type);
	};

	return (
		<>
			<TransactionView
				modalType={modalType}
				setModalType={setModalType}
				transactionId={transactionId}
			/>
			<TransactionForm
				modalType={modalType}
				setModalType={setModalType}
				transactionId={transactionId}
			/>
			<TransactionDelete
				modalType={modalType}
				setModalType={setModalType}
				transactionId={transactionId}
			/>
			<Table
				columns={transactionTableColumns}
				data={getFilteredTransactionType(transactions, filterType)}
				actions={[
					{
						type: 'view',
						icon: <BsFillEyeFill />,
						clickHandler: transactionAction,
					},
					{
						type: 'form',
						icon: <AiFillEdit />,
						clickHandler: transactionAction,
					},
					{
						type: 'delete',
						icon: <AiFillDelete />,
						clickHandler: transactionAction,
					},
				]}
			/>
		</>
	);
};

export default TransactionTable;
