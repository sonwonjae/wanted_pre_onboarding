export const shuttleSwitch =
  (rightGapRatio) =>
  ({ isSelected, size }) =>
    `translate(${isSelected ? size * rightGapRatio : 0}px)`;
