'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import styles from './NoteCard.module.scss';
import NoteDelete from './NoteDelete';

const NoteCard = ({ note }: any) => {
	const [modalType, setModalType] = useState(false);
	const [id, setId] = useState('');
	const deleteNote = (id: string) => {
		setModalType(true);
		setId(id);
	};
	return (
		<>
			<NoteDelete
				id={id}
				modalType={modalType}
				setModalType={setModalType}
			/>
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
						<button onClick={() => deleteNote(note?._id)}>
							<AiFillDelete />
						</button>
					</div>
				</div>
				<div className={styles['details']}>
					<div dangerouslySetInnerHTML={{ __html: note?.details }} />
				</div>
			</div>
		</>
	);
};

export default NoteCard;
