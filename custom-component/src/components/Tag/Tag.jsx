import { memo } from 'react';
import { TagContainer } from './Tag.styled';
function Tag() {
  return (
    <TagContainer>
      <Tag.TagList>
        {[<span>1</span>, <span>2</span>, <span>3</span>]}
      </Tag.TagList>
      <input placeholder="Press enter to add tags" />
    </TagContainer>
  );
}

Tag.TagList = function TagList({ children }) {
  return <>{children}</>;
};

export default memo(Tag);
