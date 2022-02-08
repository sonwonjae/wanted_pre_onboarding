import { useModalToggle, useFocusableElements } from 'hooks';
import { memo, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button, Overlay, DialogContainer } from './Modal.styled';

function Modal() {
  const [showModal, toggleModal] = useModalToggle(false);

  return (
    <>
      <Button onClick={toggleModal}>Open Modal</Button>
      {showModal && <Modal.Dialog closeModal={toggleModal} />}
    </>
  );
}

Modal.Dialog = function Dialog({ closeModal }) {
  const modalRef = useRef();
  const [firstEl, lastEl] = useFocusableElements(modalRef);

  const keyboardTrapInModal = useCallback(
    (e) => {
      if (e.key === 'Escape') return closeModal();
      if (e.key !== 'Tab') return;

      const trapEl = e.shiftKey ? firstEl : lastEl;
      const focusEl = e.shiftKey ? lastEl : firstEl;

      if (document.activeElement === trapEl) {
        focusEl.focus();
        e.preventDefault();
      }
    },
    [firstEl, lastEl]
  );

  return createPortal(
    <Overlay onClick={closeModal}>
      <DialogContainer ref={modalRef} onKeyDown={keyboardTrapInModal}>
        <button onClick={closeModal}>×</button>
        HELLO CODESTATES!
      </DialogContainer>
    </Overlay>,
    document.body
  );
};

export default memo(Modal);
