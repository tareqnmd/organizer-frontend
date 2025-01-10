import { baseDateFormat } from '@/lib/utils';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import OrganizerPdfLogo from './OrganizerPdfLogo';

const OrganizerPdf = ({
	children,
	subHeader,
}: {
	children: React.ReactNode;
	subHeader?: string;
}) => {
	const styles = StyleSheet.create({
		page: {
			padding: 20,
			paddingBottom: 50,
			color: '#000000',
			fontSize: 10,
		},
		pdfHeader: {
			marginBottom: 10,
			paddingBottom: 10,
			borderBottom: '1px solid #000',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'flex-end',
		},
		pdfHeaderText: {
			display: 'flex',
			flexDirection: 'column',
		},
		pdfSubHeader: {
			fontSize: 12,
			fontWeight: 'bold',
		},
		pdfContent: {},
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

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View fixed style={styles.pdfHeader}>
					<View style={styles.pdfHeaderText}>
						<OrganizerPdfLogo />
						{subHeader ? (
							<Text style={styles.pdfSubHeader}>{subHeader}</Text>
						) : null}
					</View>
					<Text style={styles.pdfSubHeader}>
						Issue Date: {baseDateFormat(new Date())}
					</Text>
				</View>
				<View style={styles.pdfContent}>{children}</View>
				<View fixed style={styles.pageNumber}>
					<Text
						render={({ pageNumber, totalPages }) =>
							`Page ${pageNumber} of ${totalPages}`
						}
					/>
				</View>
			</Page>
		</Document>
	);
};

export default OrganizerPdf;
