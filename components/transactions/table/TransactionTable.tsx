'use client';
import { useDeleteTransactionMutation } from '@/features/transactions/transactions-api';
import { getTransactionsState } from '@/features/transactions/transactions-slice';
import { getError } from '@/utils/helpers';
import {
	getColumnData,
	getFilteredTransactionType,
	transactionTableColumns,
} from '@/utils/helpers/transaction-helper';
import { ITransaction } from '@/utils/types/transaction-types';
import { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import TransactionEdit from '../update/TransactionEdit';
import styles from './TransactionTable.module.scss';
const TransactionTable = () => {
	const [editModal, setEditModal] = useState(false);
	const [editId, setEditId] = useState('');
	const { transactions, filterTime, filterType } =
		useSelector(getTransactionsState);

	const [deleteTransaction, { isSuccess, isLoading, isError, error }] =
		useDeleteTransactionMutation();

	const transactionDelete = (id: string) => {
		deleteTransaction(id);
	};

	const transactionEdit = (id: string) => {
		setEditId(id);
		setEditModal(true);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Deleted', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error]);

	return (
		<>
			<TransactionEdit
				editModal={editModal}
				setEditModal={setEditModal}
				editId={editId}
			/>
			{transactions?.length && transactionTableColumns?.length ? (
				<table className={`${styles['transaction-table']}`}>
					<thead>
						<tr>
							{transactionTableColumns?.map((title) => (
								<th key={title.dataIndex}>{title.title}</th>
							))}
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{getFilteredTransactionType(
							transactions,
							filterTime,
							filterType
						)?.map((transaction: ITransaction) => (
							<tr
								className={styles[transaction?.type]}
								key={transaction._id}
							>
								{transactionTableColumns?.map((title) => (
									<td key={title.dataIndex}>
										{getColumnData(transaction, title)}
									</td>
								))}
								<td className={styles['action-btns']}>
									<button
										disabled={isLoading}
										onClick={() =>
											transactionEdit(transaction._id)
										}
									>
										<AiOutlineEdit />
									</button>
									<button
										disabled={isLoading}
										onClick={() =>
											transactionDelete(transaction._id)
										}
									>
										<AiOutlineDelete />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : null}
		</>
	);
};

export default TransactionTable;
