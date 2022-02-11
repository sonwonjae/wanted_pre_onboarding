import { useModalToggle } from 'hooks';
import { memo } from 'react';
import { Button } from './style';
import { Dialog } from './Compound';

function Modal() {
  const [showModal, toggleModal] = useModalToggle(false);

  return (
    <>
      <Button onClick={toggleModal}>Open Modal</Button>
      {showModal && <Dialog closeModal={toggleModal} />}
    </>
  );
}

export default memo(Modal);
