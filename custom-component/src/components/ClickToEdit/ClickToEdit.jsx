import { memo } from 'react';
import { A11yHidden } from 'components/Util';
import { useFormInfo } from 'hooks';
import { initFormInputList, reducer } from './setting';
import { Form, AllInfo } from './style';
import { useClickToEditView } from './view';

function ClickToEdit({ formInputList }) {
  const [{ allInfo, updateAllInfo }, { formInputs, dispatch }] = useFormInfo({
    reducer,
    initialState: formInputList,
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
ClickToEdit.defaultProps = {
  formInputList: initFormInputList,
};

export default memo(ClickToEdit);
