import Link from 'next/link';
import styles from './NoteDetailView.module.scss';

const NoteDetailView = ({ note }: any) => {
	return (
		<div className={styles['note']}>
			<div className={styles['header']}>
				<Link href={`/note/view/${note?._id}`}>{note?.name}</Link>
			</div>
			<div className={styles['details']}>{note?.details}</div>
		</div>
	);
};

export default NoteDetailView;
