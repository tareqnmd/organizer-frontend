import {
	BudgetTransactionsType,
	BudgetTransactionType,
} from '@/lib/helper/budget';
import { baseDateFormat } from '@/lib/utils';
import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer';
import { View } from 'lucide-react';
import React from 'react';

const BudgetTransactionsPdf = ({
	transactions,
	subHeader,
}: {
	transactions: BudgetTransactionsType;
	subHeader: string;
}) => {
	const styles = StyleSheet.create({
		page: {
			padding: 20,
			paddingBottom: 60,
			color: '#000000',
			fontSize: 10,
		},
		pdfHeader: {
			fontSize: 24,
			fontWeight: 'bold',
			textAlign: 'center',
			padding: 10,
			paddingTop: 0,
			borderBottom: '1px solid #000',
		},
		pdfSubHeader: {
			fontSize: 16,
			fontWeight: 'bold',
			textAlign: 'center',
			padding: 16,
		},
		row: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 10,
			textAlign: 'left',
			border: '1px solid #000',
			borderTop: 'none',
		},
		column: {
			width: '30%',
		},
		lg_column: {
			width: '30%',
		},
		md_column: {
			width: '16%',
		},
		sm_column: {
			width: '12%',
		},
		headerRow: {
			backgroundColor: '#222222',
			fontWeight: 'bold',
			color: '#ffffff',
		},
		incomeRow: {
			backgroundColor: '#ccffcc50',
		},
		expenseRow: {
			backgroundColor: '#ffcccc50',
		},
		text_left: {
			textAlign: 'left',
		},
		text_right: {
			textAlign: 'right',
		},
		font_bold: {
			fontWeight: 'extrabold',
		},
		pageNumber: {
			position: 'absolute',
			fontSize: 12,
			bottom: 30,
			left: 0,
			right: 0,
			textAlign: 'center',
			color: 'grey',
		},
	});

	const totalIncomeAmount = transactions?.reduce(
		(acc, transaction) =>
			acc +
			(transaction?.typeName === 'Income' ? transaction?.amount : 0),
		0,
	);
	const totalExpenseAmount = transactions?.reduce(
		(acc, transaction) =>
			acc +
			(transaction?.typeName === 'Expense' ? transaction?.amount : 0),
		0,
	);

	const totalAmount = totalIncomeAmount - totalExpenseAmount;

	const renderTransactionRow = (
		transaction: BudgetTransactionType,
		index: number,
	) => (
		<View
			style={{
				...styles.row,
				...(transaction?.typeName === 'Income'
					? styles.incomeRow
					: styles.expenseRow),
			}}
			key={index}
		>
			<Text style={[styles.column]} wrap={false}>
				{transaction?.categoryName}
			</Text>
			<Text style={[styles.column, styles.sm_column]}>
				{transaction?.typeName}
			</Text>
			<Text style={[styles.column, styles.md_column]}>
				{baseDateFormat(transaction?.date)}
			</Text>
			<Text style={[styles.column, styles.lg_column]}>
				{transaction?.description}
			</Text>
			<Text style={[styles.column, styles.sm_column, styles.text_right]}>
				{transaction?.amount}
			</Text>
		</View>
	);

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<Text fixed style={styles.pdfHeader}>
					Organizer
				</Text>
				<Text fixed style={styles.pdfSubHeader}>
					{subHeader}
				</Text>
				{transactions && (
					<React.Fragment>
						<View style={{ ...styles.row, ...styles.headerRow }}>
							<Text style={[styles.column]}>Category</Text>
							<Text style={[styles.column, styles.sm_column]}>
								Type
							</Text>
							<Text style={[styles.column, styles.md_column]}>
								Date
							</Text>
							<Text style={[styles.column, styles.lg_column]}>
								Description
							</Text>
							<Text
								style={[
									styles.column,
									styles.sm_column,
									styles.text_right,
								]}
							>
								Amount
							</Text>
						</View>
						{transactions.map(renderTransactionRow)}
						<View style={styles.row}>
							<Text
								style={[
									styles.column,
									styles.text_right,
									styles.font_bold,
									{ width: '100%' },
								]}
							>
								Total Income: {totalIncomeAmount}
							</Text>
						</View>
						<View style={styles.row}>
							<Text
								style={[
									styles.column,
									styles.text_right,
									styles.font_bold,
									{ width: '100%' },
								]}
							>
								Total Expense: {totalExpenseAmount}
							</Text>
						</View>
						<View style={styles.row}>
							<Text
								style={[
									styles.column,
									styles.text_right,
									styles.font_bold,
									{ width: '100%' },
								]}
							>
								Total Amount: {totalAmount}
							</Text>
						</View>
					</React.Fragment>
				)}
				<Text
					style={styles.pageNumber}
					render={({ pageNumber, totalPages }) =>
						`${pageNumber} / ${totalPages}`
					}
					fixed
				/>
			</Page>
		</Document>
	);
};

export default BudgetTransactionsPdf;
