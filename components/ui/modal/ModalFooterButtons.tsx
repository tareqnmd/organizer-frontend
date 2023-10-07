import styles from './ModalFooterButtons.module.scss';
const ModalFooterButtons = ({ children }: any) => {
	return <div className={styles['modal-footer-buttons']}>{children}</div>;
};

export default ModalFooterButtons;
