import { useState } from 'react';
import { AutoCompleteList } from './AutoCompleteList';

const autoCompleteList = new AutoCompleteList();

export const useAutoComplete = () => {
  const [matchWords, setmatchWords] = useState([]);

  const addWord = (e) => {
    if (e.key !== 'Enter') return;
    autoCompleteList.insert(e.target.value);
    e.target.value = '';
    setmatchWords(autoCompleteList.getSameWords(e.target.value));
  };

  const updateMatchWords = (e) => {
    if (e.target.value === null) setmatchWords([]);
    setmatchWords(autoCompleteList.getSameWords(e.target.value));
  };

  return { matchWords, addWord, updateMatchWords };
};
