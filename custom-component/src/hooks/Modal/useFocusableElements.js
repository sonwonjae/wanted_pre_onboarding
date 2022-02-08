import { useEffect, useState } from 'react';

const focusableSelectors =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const useFocusableElements = (ref) => {
  const [
    { firstFocusableElement, lastFocusableElement },
    setFocusableElements,
  ] = useState({ firstFocusableElement: null, lastFocusableElement: null });

  useEffect(() => {
    const focusableElements = ref.current.querySelectorAll(focusableSelectors);

    setFocusableElements({
      firstFocusableElement: focusableElements[0],
      lastFocusableElement: focusableElements[focusableElements.length - 1],
    });

    firstFocusableElement?.focus();
  }, [firstFocusableElement, ref]);

  return [firstFocusableElement, lastFocusableElement];
};
