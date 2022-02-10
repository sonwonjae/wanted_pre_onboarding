import { memo, useEffect, useRef, useCallback } from 'react';
import { useAutoComplete, useToggle } from 'hooks';
import {
  MatchWordList,
  MatchWord,
  Input,
  AutoCompleteContainer,
} from './AutoComplete.styled';
import { makeClassNames } from 'utils';

function AutoComplete() {
  const autocompleteRef = useRef();
  const inputRef = useRef();
  const isInput = !!inputRef.current?.value;
  const [isFocus, _, onIsFocus, offIsFocus] = useToggle();
  const { matchWords, isAutoCompleteList, addWord, updateMatchWords } =
    useAutoComplete();

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
    if (e.target.closest(makeClassNames(autocompleteRef.current.classList))) {
      return;
    }
    offIsFocus();
  }, []);

  const makeMatchWords = useCallback(
    (matchWords) =>
      matchWords.map((matchWord) => (
        <MatchWord key={matchWord} onClick={updateMatchWord}>
          {matchWord}
        </MatchWord>
      )),
    [updateMatchWord]
  );

  useEffect(() => {
    document.body.addEventListener('click', onBlurToAutoComplete);
    return function cleanup() {
      document.body.removeEventListener('click', onBlurToAutoComplete);
    };
  }, [onBlurToAutoComplete]);

  return (
    <AutoCompleteContainer ref={autocompleteRef} onFocus={onIsFocus}>
      <Input
        ref={inputRef}
        onInput={updateMatchWords}
        onKeyUp={setAutoCompleteWord}
        isFocus={isFocus && isInput}
      />
      {isAutoCompleteList && isInput && isFocus && (
        <MatchWordList>{makeMatchWords(matchWords)}</MatchWordList>
      )}
    </AutoCompleteContainer>
  );
}

export default memo(AutoComplete);
