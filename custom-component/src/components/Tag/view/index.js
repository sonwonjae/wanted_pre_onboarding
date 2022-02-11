import { TagItem } from '../Compound';

export const useTagView = ({ deleteTagItem }) => {
  const makeTagList = (tags) => {
    return [...tags.values()].map((tag) => (
      <TagItem key={tag} onClick={deleteTagItem(tag)}>
        {tag}
      </TagItem>
    ));
  };

  return { makeTagList };
};
