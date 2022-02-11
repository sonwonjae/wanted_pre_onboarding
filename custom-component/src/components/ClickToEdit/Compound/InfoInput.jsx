import { useToggle } from 'hooks';
import { memo, useEffect, useRef } from 'react';
import { useInfoInputController } from '../controller';

function InfoInput({ label, value, name, dispatch, updateAllInfo }) {
  const [isFocus, _, onIsFocus, offIsFocus] = useToggle();
  const inputRef = useRef();
  const { updateInfoInput, updateAllInfoInput, onBlurWithEnterKey } =
    useInfoInputController({
      dispatch,
      name,
      updateAllInfo,
      offIsFocus,
    });

  const inputProps = {
    ref: inputRef,
    type: 'text',
    value: value || '',
    onChange: updateInfoInput,
    onBlur: updateAllInfoInput,
    onKeyUp: onBlurWithEnterKey,
  };

  const boxProps = {
    onDoubleClick: onIsFocus,
    children: value || '',
  };

  useEffect(() => {
    isFocus && inputRef.current.focus();
  }, [isFocus]);

  return (
    <>
      <label>
        {label}
        {isFocus ? <input {...inputProps} /> : <div {...boxProps} />}
      </label>
    </>
  );
}

export default memo(InfoInput);
