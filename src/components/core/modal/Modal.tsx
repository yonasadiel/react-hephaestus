import classnames from 'classnames';
import React from 'react';

import * as cStyles from '../../../common/styles/';
import './Modal.scss';

export interface ModalProps extends React.HTMLProps<HTMLDivElement> {
  isShowing?: boolean;
  closeModal: () => void;
};

const Modal = (props: ModalProps) => {
  const { className, children, isShowing, closeModal } = props;

  const modalWrapperClass = classnames(
    `${cStyles.ns}-modal wrapper`,
    isShowing && 'active',
  );

  return (
    <div className={modalWrapperClass}>
      <div className="modal-background" onClick={closeModal} />
      <div className={`modal ${className}`}>
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  isShowing: false,
  className: '',
};

export default Modal;