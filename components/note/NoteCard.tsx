import Link from 'next/link';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import styles from './NoteCard.module.scss';

const NoteCard = ({ note }: any) => {
	return (
		<div className={styles['note']}>
			<div className={styles['header']}>
				<Link href={`/note/view/${note?._id}`}>{note?.name}</Link>
				<div className={styles['actions']}>
					<Link href={`/note/view/${note?._id}`}>
						<BsFillEyeFill />
					</Link>
					<Link href={`/note/edit/${note?._id}`}>
						<AiFillEdit />
					</Link>
					{/* <button onClick={``}>
						<AiFillDelete />
					</button> */}
				</div>
			</div>
			<div className={styles['details']}>{note?.details}</div>
		</div>
	);
};

export default NoteCard;
