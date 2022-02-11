import { useCallback } from 'react';
import { MatchWord } from '../style';

export const useAutoCompleteView = ({ updateMatchWord }) => {
  const makeMatchWords = useCallback(
    (matchWords) =>
      matchWords.map((matchWord) => (
        <MatchWord key={matchWord} onClick={updateMatchWord}>
          {matchWord}
        </MatchWord>
      )),
    [updateMatchWord]
  );
  return { makeMatchWords };
};
