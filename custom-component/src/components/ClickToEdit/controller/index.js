import { useCallback } from 'react';

export const useInfoInputController = ({
  dispatch,
  name,
  updateAllInfo,
  offIsFocus,
}) => {
  const updateInfoInput = useCallback(
    (e) => dispatch({ type: name, payload: e.target.value }),
    [dispatch, name]
  );

  const updateAllInfoInput = () => {
    updateAllInfo();
    offIsFocus();
  };

  const onBlurWithEnterKey = (e) => {
    if (e.key !== 'Enter') return;
    e.target.blur();
  };

  return { updateInfoInput, updateAllInfoInput, onBlurWithEnterKey };
};
