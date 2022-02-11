import styled from 'styled-components';
import { getHexaColor } from 'styles/color/getHexaColor';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  & label {
    display: inline-block;
    height: 2rem;
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }

  & input,
  & div {
    height: 2rem;
    line-height: 1.2;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    margin-left: 0.5rem;
    font-size: 0.8rem;
    padding: 0.5rem;
    min-width: 200px;
    border-radius: 0.5rem;
    border: 1px solid ${getHexaColor('gray', 200)};
  }

  & input:focus {
    border: none;
    outline: 2px solid ${getHexaColor('primary')};
  }
`;

export const AllInfo = styled.span`
  /* 이거 margin-top 좀 고민해보자 */
  display: inline-block;
  margin-top: 1rem;
`;
