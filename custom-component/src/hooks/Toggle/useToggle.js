const { useState } = require('react');

export const useToggle = (on = false) => {
  const [isOn, setIsOn] = useState(on);
  const toggleIsOn = () => setIsOn(!isOn);
  const offIsOn = () => setIsOn(false);
  const onIsOn = () => setIsOn(true);

  return [isOn, toggleIsOn, onIsOn, offIsOn];
};
