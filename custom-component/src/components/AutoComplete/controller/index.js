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
  const targetOnFocus = (e) => {
    if (e.target === e.currentTarget) onIsFocus();
  };

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
    e.preventDefault();

    addWord(e);
  }, []);

  const onBlurToAutoComplete = useCallback((e) => {
    if (!autocompleteRef.current || !matchWordsRef.current) return;

    const { classList } = autocompleteRef.current;
    if (e.target === matchWordsRef.current) return offIsFocus();
    if (e.target.closest(makeClassNames(classList))) return;

    offIsFocus();
  }, []);

  const moveMatchWords = useCallback(
    (e) => {
      onIsFocus();
      if (!matchWordsRef.current || !matchWordsRef.current.firstChild) {
        e.key === 'Escape' && offIsFocus();
        return;
      }

      if (!(e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Escape'))
        return;

      e.key === 'ArrowDown' && matchWordsRef.current.firstChild.focus();
      e.key === 'ArrowUp' && matchWordsRef.current.lastChild.focus();
      e.key === 'Escape' && offIsFocus();

      e.preventDefault();
    },
    [matchWordsRef]
  );

  return {
    targetOnFocus,
    updateMatchWord,
    setAutoCompleteWord,
    onBlurToAutoComplete,
    moveMatchWords,
  };
};
