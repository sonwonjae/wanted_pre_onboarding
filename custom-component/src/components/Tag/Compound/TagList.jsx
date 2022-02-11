import { memo } from 'react';

function TagList({ children }) {
  return <>{children}</>;
}

export default memo(TagList);
