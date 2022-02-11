import { memo } from 'react';
import { useToggle } from 'hooks';
import { ToggleButton } from './style';
import { Container } from 'styles/components/Container';

function Toggle({ width }) {
  const [selected, toggleButton] = useToggle(false);

  return (
    <Container gap={10}>
      <ToggleButton onClick={toggleButton} isSelected={selected} size={width} />
      <span>Toggle Switch {selected ? 'ON' : 'OFF'}</span>
    </Container>
  );
}
Toggle.defaultProps = {
  width: 40,
};

export default memo(Toggle);
