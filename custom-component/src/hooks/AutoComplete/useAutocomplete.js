import { useState } from 'react';
import { AutoCompleteList } from './AutoCompleteList';

const autoCompleteList = new AutoCompleteList();

export const useAutoComplete = () => {
  const [matchWords, setmatchWords] = useState([]);

  const addWord = (e) => {
    if (e.key !== 'Enter') return;
    autoCompleteList.insert(e.target.value);
    e.target.value = '';
  };

  const updateMatchWords = (e) => {
    setmatchWords(autoCompleteList.getSameWords(e.target.value));
  };

  return { matchWords, addWord, updateMatchWords };
};
