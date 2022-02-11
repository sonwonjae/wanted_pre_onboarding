import { memo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Nav, NavLinkList, NavLinkItem, Main } from './Tab.styled';

function Tab({ tabList }) {
  const setIsActiveClassName = ({ isActive }) => (isActive ? 'active' : null);

  const makeNavLinkList = () =>
    tabList.map((tab) => {
      return (
        <NavLinkItem key={tab}>
          <NavLink to={tab} className={setIsActiveClassName}>
            {tab}
          </NavLink>
        </NavLinkItem>
      );
    });

  return (
    <>
      <Nav>
        <NavLinkList>{makeNavLinkList()}</NavLinkList>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default memo(Tab);
