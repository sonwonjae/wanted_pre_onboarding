import { useCallback, useMemo } from 'react';
import { MatchWord } from '../style';

export const useAutoCompleteView = ({ updateMatchWord, offIsFocus }) => {
  const trappingKeyboardAction = useMemo(
    () => ({
      ArrowDown: (e) => {
        e.target.nextSibling
          ? e.target.nextSibling.focus()
          : e.target.parentNode.firstChild.focus();
      },
      ArrowUp: (e) => {
        e.target.previousSibling
          ? e.target.previousSibling.focus()
          : e.target.parentNode.lastChild.focus();
      },
      Escape: offIsFocus,
    }),
    [offIsFocus]
  );

  const updateMatchWordWithKeyboard = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ' ') updateMatchWord(e);
    },
    [updateMatchWord]
  );

  const listKeyboardTrapping = (e) => {
    if (!trappingKeyboardAction[e.key]) return;
    trappingKeyboardAction[e.key](e);
    e.preventDefault();
  };

  const makeMatchWords = useCallback(
    (matchWords) =>
      matchWords.map((matchWord) => (
        <MatchWord
          key={matchWord}
          onClick={updateMatchWord}
          tabIndex={0}
          onKeyUp={updateMatchWordWithKeyboard}
          onKeyDown={listKeyboardTrapping}
        >
          {matchWord}
        </MatchWord>
      )),
    [updateMatchWord]
  );

  return { makeMatchWords };
};
