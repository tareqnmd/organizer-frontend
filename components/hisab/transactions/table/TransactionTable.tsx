'use client';
import Table from '@/components/ui/table/Table';
import { getTransactionsState } from '@/features/hisab/transactions/slice';
import {
	footerTransactionAmount,
	getFilteredTransactionType,
	transactionTableColumns,
} from '@/utils/helpers/hisab/transaction-helper';
import { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import TransactionDelete from '../delete/TransactionDelete';
import TransactionForm from '../form/TransactionForm';
import TransactionView from '../view/TransactionView';
const TransactionTable = () => {
	const [modalType, setModalType] = useState('');
	const [transactionId, setTransactionId] = useState('');
	const { transactions, filterType, filter } =
		useSelector(getTransactionsState);

	const [data, setData] = useState<any>({
		updated_transactions: [],
		total_price: '',
	});

	const transactionAction = (type: string, item: any) => {
		setTransactionId(item._id);
		setModalType(type);
	};

	useEffect(() => {
		if (transactions && filterType && filter) {
			const updated_transactions = getFilteredTransactionType(
				transactions,
				filterType,
				filter
			);
			const total_price = footerTransactionAmount(updated_transactions);
			setData({
				updated_transactions,
				total_price,
			});
		}
	}, [transactions, filterType, filter]);

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
				data={data?.updated_transactions}
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
				footer={
					<>
						<td
							className="!font-bold"
							colSpan={2}
						>
							Total
						</td>
						<td className="!font-bold">{data?.total_price}</td>
						<td colSpan={2}></td>
					</>
				}
			/>
		</>
	);
};

export default TransactionTable;
