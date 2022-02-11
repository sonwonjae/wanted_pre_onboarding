import { useFocusableElements } from 'hooks';
import { memo, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { DialogContainer, Overlay } from '../style';

function Dialog({ closeModal }) {
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

  const focusOnFirstEl = useCallback(() => firstEl.focus(), [firstEl]);

  return createPortal(
    <Overlay onClick={closeModal}>
      <DialogContainer
        ref={modalRef}
        onKeyDown={keyboardTrapInModal}
        onClick={focusOnFirstEl}
      >
        <button onClick={closeModal}>×</button>
        HELLO CODESTATES!
      </DialogContainer>
    </Overlay>,
    document.body
  );
}

export default memo(Dialog);
