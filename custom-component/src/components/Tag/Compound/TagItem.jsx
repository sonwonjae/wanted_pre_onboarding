import { memo } from 'react';
import { TagItemWrapper } from '../style';

function TagItem({ children, onClick }) {
  return (
    <TagItemWrapper>
      {children}
      <button onClick={onClick}>×</button>
    </TagItemWrapper>
  );
}

export default memo(TagItem);
