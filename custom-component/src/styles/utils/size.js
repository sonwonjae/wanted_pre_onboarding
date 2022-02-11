export const getSize = ({ size }) => size;
export const setRatioSize =
  (ratio) =>
  ({ size }) =>
    ratio * size;
