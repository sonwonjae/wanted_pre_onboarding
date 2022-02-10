import { useState } from 'react';
import { AutoCompleteList } from './AutoCompleteList';

const autoCompleteList = new AutoCompleteList();

export const useAutoComplete = () => {
  const [matchWords, setmatchWords] = useState([]);
  const isAutoCompleteList = !!autoCompleteList.getAllWords().length;

  const addWord = (e) => {
    if (e.key !== 'Enter') return;
    autoCompleteList.insert(e.target.value);
    e.target.value = '';
  };

  const updateMatchWords = (e) => {
    setmatchWords(autoCompleteList.getSameWords(e.target.value));
  };

  return { matchWords, isAutoCompleteList, addWord, updateMatchWords };
};
