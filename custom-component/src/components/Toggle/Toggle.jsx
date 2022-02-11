import { memo } from 'react';
import { useToggle } from 'hooks';
import { ToggleContainer, ToggleButton } from './style';

function Toggle({ width }) {
  const [selected, toggleButton] = useToggle(false);

  return (
    <ToggleContainer>
      <ToggleButton onClick={toggleButton} isSelected={selected} size={width} />
      <span>Toggle Switch {selected ? 'ON' : 'OFF'}</span>
    </ToggleContainer>
  );
}
Toggle.defaultProps = {
  width: 40,
};

export default memo(Toggle);
