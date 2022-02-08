import { HexaColor } from './HexaColor';

export const getHexaColor = (colorName, step = 500) =>
  HexaColor[colorName][step];
