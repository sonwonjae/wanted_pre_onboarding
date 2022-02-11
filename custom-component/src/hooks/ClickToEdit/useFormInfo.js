import { useReducer, useState } from 'react';

export const useFormInfo = ({
  allInfoToString = '',
  reducer,
  initialState,
}) => {
  const [formInputs, dispatch] = useReducer(reducer, initialState);
  const [allInfo, setAllInfo] = useState(allInfoToString);

  const updateAllInfo = (e) => {
    e?.preventDefault();

    setAllInfo(
      Object.values(formInputs)
        .map(({ label, value }) => `${label} ${value || ''}`)
        .join(' ')
    );
  };

  return [
    { allInfo, updateAllInfo },
    { formInputs, dispatch },
  ];
};
