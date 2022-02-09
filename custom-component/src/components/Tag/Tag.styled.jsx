import styled from 'styled-components';
import { getHexaColor } from 'styles/color/getHexaColor';

export const TagContainer = styled.div`
  display: inline-block;
  border: 1px solid ${getHexaColor('gray', 300)};
  border-radius: 0.4rem;
  padding: 0.4rem;
  line-height: 1;
  background-color: white;

  &:focus-within {
    position: relative;
    border: none;
    margin: 1px;
    border-radius: 0.35rem;

    &:after {
      content: '';
      z-index: -1;
      position: absolute;
      top: -1px;
      left: -1px;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background: linear-gradient(to right bottom, #000, #4900ce);
      border-radius: 0.4rem;
    }
  }
`;

export const Input = styled.input`
  height: 1.1rem;
  padding: 0.4rem;
  font-size: 0.8em;
  font-weight: 500;
  line-height: 1;
  border: none;
  margin-left: 0.5rem;

  outline: none;
`;

export const TagItemWrapper = styled.div`
  display: inline-block;
  background-color: ${getHexaColor('primary')};
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 400;
  padding: 0.4rem;

  & button {
    background-color: white;
    border: none;
    text-align: center;
    border-radius: 50%;
    width: 1.1rem;
    height: 1.1rem;
    margin-left: 0.5rem;
    padding: 0.05rem;
    line-height: 1;
    font-size: 1rem;
    cursor: pointer;
  }

  & ~ & {
    margin-left: 0.5rem;
  }
`;
