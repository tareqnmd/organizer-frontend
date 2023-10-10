'use client';
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Modal.module.scss';
export default function Modal({
	children,
	onCancel,
	open,
	footer = null,
	title = 'Title',
}: any) {
	const [mounted, setMounted] = useState(false);
	useLayoutEffect(() => setMounted(true), []);
	const closeModal = (e: any) => {
		if (e.target.id === 'modal-root-area') {
			onCancel();
		}
	};
	return mounted
		? createPortal(
				<>
					{open && (
						<section
							onClick={closeModal}
							id="modal-root-area"
							className={styles['modal-overlay']}
						>
							<div className={styles['modal-container']}>
								<div className={styles['modal-header']}>
									<h6 className="font-bold">{title}</h6>
									<button onClick={onCancel}>
										<AiOutlineClose />
									</button>
								</div>
								<div className={styles['modal-body']}>
									{children}
								</div>
								{footer && (
									<div className={styles['modal-footer']}>
										{footer}
									</div>
								)}
							</div>
						</section>
					)}
				</>,
				document.body
		  )
		: null;
}