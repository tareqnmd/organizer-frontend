'use client';
import { getTransactionsState } from '@/features/transactions/transactions-slice';
import {
	getColumnData,
	getFilteredTransactionType,
	transactionTableColumns,
} from '@/utils/helpers/transaction-helper';
import { ITransaction } from '@/utils/types/transaction-types';
import { useState } from 'react';
import { AiFillEye, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import TransactionDelete from '../delete/TransactionDelete';
import TransactionForm from '../form/TransactionForm';
import TransactionView from '../view/TransactionView';
import styles from './TransactionTable.module.scss';
const TransactionTable = () => {
	const [modalType, setModalType] = useState('');
	const [transactionId, setTransactionId] = useState('');
	const { transactions, filterTime, filterType } =
		useSelector(getTransactionsState);

	const transactionAction = (id: string, type: string) => {
		setTransactionId(id);
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
										{title?.dataIndex === 'typeName'
											? ` (${transaction?.type})`
											: null}
									</td>
								))}
								<td className={styles['action-btns']}>
									<button
										onClick={() =>
											transactionAction(
												transaction._id,
												'view'
											)
										}
									>
										<AiFillEye />
									</button>
									<button
										onClick={() =>
											transactionAction(
												transaction._id,
												'form'
											)
										}
									>
										<AiOutlineEdit />
									</button>
									<button
										onClick={() =>
											transactionAction(
												transaction._id,
												'delete'
											)
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
