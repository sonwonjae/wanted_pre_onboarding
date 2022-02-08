import styled from 'styled-components';
import { getHexaColor } from 'styles/color/getHexaColor';

export const Button = styled.button`
  cursor: pointer;
  padding: 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: ${getHexaColor('primary')};
  border: none;
  border-radius: 4rem;
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const DialogContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 150px;
  background-color: white;
  color: ${getHexaColor('primary')};
  font-size: 1.5rem;
  border-radius: 1rem;

  & > button {
    position: absolute;
    top: 2.5%;
    padding: 0.5rem;
    margin: 0;
    background: transparent;
    line-height: 0.6;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
