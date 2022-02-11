import { memo } from 'react';
import { A11yHidden } from 'components/Util';
import { useFormInfo } from 'hooks';
import { initFormInput, reducer } from './setting';
import { Form, AllInfo } from './style';
import { useClickToEditView } from './view';

function ClickToEdit() {
  const [{ allInfo, updateAllInfo }, { formInputs, dispatch }] = useFormInfo({
    reducer,
    initialState: initFormInput,
  });
  const { makeInfoInputs } = useClickToEditView({ dispatch, updateAllInfo });

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

export default memo(ClickToEdit);
