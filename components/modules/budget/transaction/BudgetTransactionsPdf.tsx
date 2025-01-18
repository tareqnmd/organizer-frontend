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
		lgColumn: {
			width: '30%',
		},
		mdColumn: {
			width: '16%',
		},
		smColumn: {
			width: '12%',
		},
		footerRow: {
			backgroundColor: '#dfdfdf',
		},
		headerRow: {
			backgroundColor: '#222222',
			color: '#ffffff',
		},
		evenRow: {
			backgroundColor: '#ffffff',
		},
		oddRow: {
			backgroundColor: '#f0f0f0',
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
				...(index % 2 === 0 ? styles.evenRow : styles.oddRow),
			}}
			key={index}
			wrap={false}
		>
			<Text style={[styles.column]}>{categoryName}</Text>
			<Text style={[styles.column, styles.smColumn]}>{typeName}</Text>
			<Text style={[styles.column, styles.mdColumn]}>
				{baseDateFormat(date)}
			</Text>
			<Text style={[styles.column, styles.lgColumn]}>{description}</Text>
			<Text
				style={[
					styles.column,
					styles.smColumn,
					styles.textRight,
					styles.fontBold,
				]}
			>
				{typeName === 'Expense' ? `(${amount})` : amount}
			</Text>
		</View>
	);

	return (
		<OrganizerPdf subHeader={subHeader}>
			<View fixed style={{ ...styles.row, ...styles.headerRow }}>
				<Text style={[styles.column]}>Category</Text>
				<Text style={[styles.column, styles.smColumn]}>Type</Text>
				<Text style={[styles.column, styles.mdColumn]}>Date</Text>
				<Text style={[styles.column, styles.lgColumn]}>
					Description
				</Text>
				<Text
					style={[styles.column, styles.smColumn, styles.textRight]}
				>
					Amount
				</Text>
			</View>
			{transactions.map(renderTransactionRow)}
			<View style={[styles.row, styles.footerRow]}>
				<Text
					style={[
						styles.column,
						styles.textRight,
						styles.fontBold,
						{ width: '100%' },
					]}
				>
					Total Income: {totalIncomeAmount}
				</Text>
			</View>
			<View style={[styles.row, styles.footerRow]}>
				<Text
					style={[
						styles.column,
						styles.textRight,
						styles.fontBold,
						{ width: '100%' },
					]}
				>
					Total Expense: {totalExpenseAmount}
				</Text>
			</View>
			<View style={[styles.row, styles.footerRow]}>
				<Text
					style={[
						styles.column,
						styles.textRight,
						styles.fontBold,
						{ width: '100%' },
					]}
				>
					Total Amount:{' '}
					{totalAmount < 0 ? `(${totalAmount * -1})` : totalAmount}
				</Text>
			</View>
		</OrganizerPdf>
	);
};

export default BudgetTransactionsPdf;
