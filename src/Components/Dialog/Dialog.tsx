import { createPortal } from 'react-dom';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { DialogProps } from './Dialog.types';
import styles from './Dialog.module.scss';

export const Dialog = ({ children, title, setIsOpen }: DialogProps) => {
  return createPortal(
    <>
      <div className={styles.dark_bg} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h5 className={styles.heading}>{title}</h5>
            <button className={styles.close_button} onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className={styles.modal_content}>{children}</div>
        </div>
      </div>
    </>,
    document.body
  );
};
