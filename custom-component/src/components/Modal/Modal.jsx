import { useModalToggle } from 'hooks';
import { memo } from 'react';
import { Button } from './style';
import { Dialog } from './Compound';

function Modal({ children }) {
  const [showModal, toggleModal] = useModalToggle(false);

  return (
    <>
      <Button onClick={toggleModal}>Open Modal</Button>
      {showModal && <Dialog closeModal={toggleModal}>{children}</Dialog>}
    </>
  );
}

export default memo(Modal);
