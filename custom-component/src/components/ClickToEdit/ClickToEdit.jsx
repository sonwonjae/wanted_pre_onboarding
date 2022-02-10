import { memo, useCallback, useEffect, useRef } from 'react';
import { A11yHidden } from 'components/Util';
import { useToggle, useFormInfo } from 'hooks';
import { initFormInput, reducer } from './ClickToEdit.init';
import { Form, AllInfo } from './ClickToEdit.styled';

function ClickToEdit() {
  const [{ allInfo, updateAllInfo }, { formInputs, dispatch }] = useFormInfo({
    reducer,
    initialState: initFormInput,
  });

  const makeInfoInputs = (formInputs) =>
    Object.entries(formInputs).map(([key, { label, value }]) => (
      <ClickToEdit.InfoInput
        {...{ key, label, value, dispatch, updateAllInfo }}
        name={key}
      />
    ));

  return (
    <div>
      <Form onSubmit={updateAllInfo}>
        {makeInfoInputs(formInputs)}
        <A11yHidden as="button" type="submit" />
      </Form>
      <AllInfo>{allInfo}</AllInfo>
    </div>
  );
}

ClickToEdit.InfoInput = memo(function InfoInput({
  label,
  value,
  name,
  dispatch,
  updateAllInfo,
}) {
  const [isFocus, _, onIsFocus, offIsFocus] = useToggle();
  const inputRef = useRef();

  const updateInfoInput = useCallback(
    (e) => dispatch({ type: name, payload: e.target.value }),
    [dispatch, name]
  );

  const inputProps = {
    ref: inputRef,
    type: 'text',
    value: value || '',
    onChange: updateInfoInput,
    onBlur: () => {
      updateAllInfo();
      offIsFocus();
    },
    onKeyUp: (e) => {
      if (e.key !== 'Enter') return;
      e.target.blur();
    },
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
});

export default memo(ClickToEdit);
