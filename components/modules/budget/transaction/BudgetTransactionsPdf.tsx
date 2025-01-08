import { BudgetTransactionsType } from '@/lib/helper/budget';
import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer';

const BudgetTransactionsPdf = ({
	transactions,
}: {
	transactions: BudgetTransactionsType;
}) => {
	console.log(transactions);
	const styles = StyleSheet.create({
		page: {
			padding: 10,
		},
	});

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<Text>Hello World</Text>
			</Page>
		</Document>
	);
};

export default BudgetTransactionsPdf;
