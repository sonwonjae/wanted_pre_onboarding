import { useState } from 'react';

export const useTagControl = () => {
  const [tags, setTags] = useState(new Set());

  const addTagItem = (e) => {
    if (e.key !== 'Enter') return;

    setTags(new Set([...tags, e.target.value]));
    e.target.value = '';
  };

  const deleteTagItem = (tag) => () => {
    tags.delete(tag);
    setTags(new Set(tags));
  };

  return { tags, addTagItem, deleteTagItem };
};
