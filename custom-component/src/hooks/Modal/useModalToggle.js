import { useState } from 'react';

export const useModalToggle = (isShowModal = false) => {
  const [showModal, setShowModal] = useState(isShowModal);

  const toggleModal = (e) => {
    if (!e) return setShowModal(!showModal);

    e.target === e.currentTarget && setShowModal(!showModal);
  };

  return [showModal, toggleModal];
};
