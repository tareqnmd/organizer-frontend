import { BudgetTransactionsType } from '@/lib/helper/budget';
import { baseDateFormat, moneyFormat } from '@/lib/utils';
import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer';
import { View } from 'lucide-react';

const BudgetTransactionsPdf = ({
	transactions,
}: {
	transactions: BudgetTransactionsType;
}) => {
	const styles = StyleSheet.create({
		page: {
			padding: 35,
			color: '#000000',
			fontSize: 12,
		},
		row: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 10,
			textAlign: 'left',
			border: '1px solid #999999',
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
		evenRow: {
			backgroundColor: '#f0f0f0',
		},
		oddRow: {
			backgroundColor: '#ffffff',
		},
		text_left: {
			textAlign: 'left',
		},
		text_right: {
			textAlign: 'right',
		},
		font_bold: {
			fontWeight: 'bold',
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

	const totalAmount = transactions?.reduce(
		(acc: number, transaction: any) => acc + transaction?.amount,
		0,
	);

	console.log(transactions);

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{transactions ? (
					<>
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
						{transactions?.map(
							(transaction: any, index: number) => (
								<View
									style={{
										...styles.row,
										...(index % 2 === 0
											? styles.evenRow
											: styles.oddRow),
									}}
									key={index}
								>
									<Text style={[styles.column]}>
										{transaction?.categoryName}
									</Text>
									<Text
										style={[
											styles.column,
											styles.sm_column,
										]}
									>
										{transaction?.typeName}
									</Text>
									<Text
										style={[
											styles.column,
											styles.md_column,
										]}
									>
										{baseDateFormat(transaction?.date)}
									</Text>
									<Text
										style={[
											styles.column,
											styles.lg_column,
										]}
									>
										{transaction?.description}
									</Text>
									<Text
										style={[
											styles.column,
											styles.sm_column,
											styles.text_right,
										]}
									>
										{transaction?.amount}
									</Text>
								</View>
							),
						)}
						<View style={styles.row}>
							<Text
								style={[
									styles.column,
									styles.text_right,
									styles.font_bold,
									{ width: '100%' },
								]}
							>
								{moneyFormat(totalAmount, 'BDT')}
							</Text>
						</View>
					</>
				) : null}
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
