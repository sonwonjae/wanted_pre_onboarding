export const initFormInput = {
  name: { label: '이름', value: '손원재' },
  age: { label: '나이', value: '27' },
};

export const reducer = (state, { type, payload }) => {
  if (initFormInput[type]) {
    return { ...state, [type]: { ...state[type], value: payload } };
  }

  throw new Error(`This state has no ${payload}`);
};
