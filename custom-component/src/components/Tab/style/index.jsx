import styled from 'styled-components';
import { getHexaColor } from 'styles/color/getHexaColor';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${getHexaColor('gray', 100)};
`;

export const NavLinkList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0 2rem;
`;

export const NavLinkItem = styled.li`
  width: 100%;

  & > a {
    transition: all 300ms ease-out;
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    text-decoration: none;
    color: ${getHexaColor('gray', 300)};

    &:hover {
      color: ${getHexaColor('primary')};
      background-color: white;
    }

    &.active {
      color: white;
      background-color: ${getHexaColor('primary')};
    }
  }

  &:hover {
    & > a {
    }
  }
`;

export const Main = styled.main`
  padding-top: 10rem;
`;
