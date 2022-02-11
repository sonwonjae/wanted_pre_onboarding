import { memo, useEffect, useRef } from 'react';
import { useAutoComplete, useToggle } from 'hooks';
import { MatchWordList, Input, AutoCompleteContainer } from './style';
import { useAutoCompleteController } from './controller';
import { useAutoCompleteView } from './view';

function AutoComplete() {
  const autocompleteRef = useRef();
  const matchWordsRef = useRef();
  const inputRef = useRef();
  const [isFocus, _, onIsFocus, offIsFocus] = useToggle();
  const { matchWords, addWord, updateMatchWords } = useAutoComplete();
  const { updateMatchWord, setAutoCompleteWord, onBlurToAutoComplete } =
    useAutoCompleteController({
      inputRef,
      autocompleteRef,
      matchWordsRef,
      updateMatchWords,
      onIsFocus,
      offIsFocus,
      addWord,
    });
  const { makeMatchWords } = useAutoCompleteView({ updateMatchWord });

  const isInput = !!inputRef.current?.value;

  const inputProps = {
    ref: inputRef,
    onInput: updateMatchWords,
    onKeyUp: setAutoCompleteWord,
    isFocus: isFocus && isInput,
  };

  const matchWordListProps = {
    ref: matchWordsRef,
    children: makeMatchWords(matchWords),
  };

  useEffect(() => {
    document.body.addEventListener('click', onBlurToAutoComplete);
    return function cleanup() {
      document.body.removeEventListener('click', onBlurToAutoComplete);
    };
  }, [onBlurToAutoComplete]);

  return (
    <AutoCompleteContainer ref={autocompleteRef} onFocus={onIsFocus}>
      <Input {...inputProps} />
      {isInput && isFocus && <MatchWordList {...matchWordListProps} />}
    </AutoCompleteContainer>
  );
}

export default memo(AutoComplete);
