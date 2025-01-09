import OrganizerPdf from '@/components/common/pdf/OrganizerPdf';
import {
	BudgetTransactionsType,
	BudgetTransactionType,
} from '@/lib/helper/budget';
import { pdfStyles } from '@/lib/helper/shared';
import { baseDateFormat } from '@/lib/utils';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { useMemo } from 'react';

const BudgetTransactionsPdf = ({
	transactions = [],
	subHeader,
}: {
	transactions?: BudgetTransactionsType;
	subHeader: string;
}) => {
	const styles = StyleSheet.create({
		...pdfStyles,
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
			backgroundColor: '#e1f1e1',
		},
		expenseRow: {
			backgroundColor: '#ebdddd',
		},
	});

	const totalIncomeAmount = useMemo(
		() =>
			transactions.reduce(
				(acc, { typeName, amount }) =>
					acc + (typeName === 'Income' ? amount : 0),
				0,
			),
		[transactions],
	);

	const totalExpenseAmount = useMemo(
		() =>
			transactions.reduce(
				(acc, { typeName, amount }) =>
					acc + (typeName === 'Expense' ? amount : 0),
				0,
			),
		[transactions],
	);

	const totalAmount = totalIncomeAmount - totalExpenseAmount;

	const renderTransactionRow = (
		{
			categoryName,
			typeName,
			date,
			description,
			amount,
		}: BudgetTransactionType,
		index: number,
	) => (
		<View
			style={{
				...styles.row,
				...(typeName === 'Income'
					? styles.incomeRow
					: styles.expenseRow),
			}}
			key={index}
			wrap={false}
		>
			<Text style={[styles.column]}>{categoryName}</Text>
			<Text style={[styles.column, styles.sm_column]}>{typeName}</Text>
			<Text style={[styles.column, styles.md_column]}>
				{baseDateFormat(date)}
			</Text>
			<Text style={[styles.column, styles.lg_column]}>{description}</Text>
			<Text style={[styles.column, styles.sm_column, styles.text_right]}>
				{amount}
			</Text>
		</View>
	);

	return (
		<OrganizerPdf subHeader={subHeader}>
			<View fixed style={{ ...styles.row, ...styles.headerRow }}>
				<Text style={[styles.column]}>Category</Text>
				<Text style={[styles.column, styles.sm_column]}>Type</Text>
				<Text style={[styles.column, styles.md_column]}>Date</Text>
				<Text style={[styles.column, styles.lg_column]}>
					Description
				</Text>
				<Text
					style={[styles.column, styles.sm_column, styles.text_right]}
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
		</OrganizerPdf>
	);
};

export default BudgetTransactionsPdf;
