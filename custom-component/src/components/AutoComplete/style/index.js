import styled from 'styled-components';
import { getHexaColor } from 'styles/color/getHexaColor';

export const AutoCompleteContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${getHexaColor('gray', 100)};
  border-radius: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.5rem;
  outline: none;

  &:focus {
    border-radius: ${({ isFocus }) =>
      isFocus ? '0.75rem 0.75rem 0 0' : '0.75rem'};
    box-shadow: -4px 5px 8px 0px ${getHexaColor('gray', 300)}5;

    & ~ ul {
      box-sizing: border-box;
      border: 1px solid ${getHexaColor('gray', 100)};
      border-top: none;
      border-radius: 0 0 0.75rem 0.75rem;
    }
  }
`;

export const EscapeButton = styled.button`
  position: absolute;
  right: 1rem;
  padding: 0.25rem;
  line-height: 0.6;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const MatchWordList = styled.ul`
  margin: 0;
  padding: 0.5rem 0;
  background-color: white;
  border-radius: 0 0 0.75rem 0.75rem;
  box-shadow: -4px 5px 8px 0px ${getHexaColor('gray', 300)}5;
  position: absolute;
  width: 100%;
  top: 100%;
  list-style: none;

  & ~ input {
    outline: none;
    border-radius: 0.75rem 0.75rem 0 0;
  }
`;

export const MatchWord = styled.li`
  cursor: pointer;
  line-height: 1.5;
  font-size: 1rem;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${getHexaColor('gray', 300)}3;
  }

  & ~ & {
    margin-top: 0.25rem;
  }
`;
