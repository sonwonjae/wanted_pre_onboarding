import { memo, useCallback } from 'react';
import { TagContainer, TagItemWrapper, Input } from './Tag.styled';
import { useTagControl } from 'hooks';

function Tag() {
  const { tags, addTagItem, deleteTagItem } = useTagControl();

  const makeTagList = useCallback(
    (tags) => {
      return [...tags.values()].map((tag) => (
        <Tag.TagItem key={tag} onClick={deleteTagItem(tag)}>
          {tag}
        </Tag.TagItem>
      ));
    },
    [tags]
  );

  return (
    <TagContainer>
      <Tag.TagList>{makeTagList(tags)}</Tag.TagList>
      <Input onKeyUp={addTagItem} placeholder="Press enter to add tags" />
    </TagContainer>
  );
}

Tag.TagList = function TagList({ children }) {
  return <>{children}</>;
};

Tag.TagItem = function TagItem({ children, onClick }) {
  return (
    <TagItemWrapper>
      {children}
      <button onClick={onClick}>×</button>
    </TagItemWrapper>
  );
};

export default memo(Tag);
