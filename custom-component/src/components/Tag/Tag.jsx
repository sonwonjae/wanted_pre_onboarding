import { memo } from 'react';
import { TagContainer, Input } from './style';
import { useTagControl } from 'hooks';
import { TagList } from './Compound';
import { useTagView } from './view';

function Tag() {
  const { tags, addTagItem, deleteTagItem } = useTagControl();
  const { makeTagList } = useTagView({ deleteTagItem });

  return (
    <TagContainer>
      <TagList>{makeTagList(tags)}</TagList>
      <Input onKeyUp={addTagItem} placeholder="Press enter to add tags" />
    </TagContainer>
  );
}

export default memo(Tag);
