import { InfoInput } from '../Compound';

export const useClickToEditView = ({ dispatch, updateAllInfo }) => {
  const makeInfoInputs = (formInputs) =>
    Object.entries(formInputs).map(([key, { label, value }]) => (
      <InfoInput
        {...{ key, label, value, dispatch, updateAllInfo }}
        name={key}
      />
    ));

  return { makeInfoInputs };
};
