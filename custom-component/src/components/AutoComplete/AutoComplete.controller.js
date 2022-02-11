import { useCallback } from 'react';
import { makeClassNames } from 'utils';

export const useAutoCompleteController = ({
  inputRef,
  autocompleteRef,
  matchWordsRef,
  updateMatchWords,
  onIsFocus,
  offIsFocus,
  addWord,
}) => {
  const updateMatchWord = useCallback(
    (e) => {
      const value = e.target.textContent;

      inputRef.current.value = value;
      updateMatchWords({ target: { value: value } });
      offIsFocus();
    },
    [inputRef]
  );

  const setAutoCompleteWord = useCallback((e) => {
    onIsFocus();
    addWord(e);
  }, []);

  const onBlurToAutoComplete = useCallback((e) => {
    if (!autocompleteRef.current || !matchWordsRef.current) return;

    const { classList } = autocompleteRef.current;
    if (e.target === matchWordsRef.current) return offIsFocus();
    if (e.target.closest(makeClassNames(classList))) return;

    offIsFocus();
  }, []);

  return { updateMatchWord, setAutoCompleteWord, onBlurToAutoComplete };
};
