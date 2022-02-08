const { useState } = require('react');

export const useButtonToggle = (isSelected = false) => {
  const [selected, setSelected] = useState(isSelected);
  const toggleButton = () => setSelected(!selected);

  return [selected, toggleButton];
};
