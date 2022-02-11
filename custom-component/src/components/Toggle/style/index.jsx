import styled from 'styled-components';
import { getHexaColor } from 'styles/color/getHexaColor';
import { showElement } from 'styles/utils/isSelected';
import { shuttleSwitch } from 'styles/utils/mix';
import { getSize, setRatioSize } from 'styles/utils/size';

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

export const ToggleButton = styled.button`
  position: relative;
  width: ${setRatioSize(2.25)}px;
  height: ${getSize}px;
  border-radius: ${getSize}px;
  background-color: ${getHexaColor('gray', 200)};
  border: none;
  padding: 0;
  cursor: pointer;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    transition: all 200ms ease-out;
    background-color: ${getHexaColor('primary')};
    transform: ${showElement};
  }

  &:after {
    content: '';
    display: block;
    margin: ${setRatioSize(0.125)}px;
    width: ${setRatioSize(0.75)}px;
    height: ${setRatioSize(0.75)}px;
    border: none;
    border-radius: 50%;
    background-color: white;
    transition: all 200ms ease-out;
    transform: ${shuttleSwitch(1.25)};
  }
`;
