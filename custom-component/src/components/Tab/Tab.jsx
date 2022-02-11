import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, NavLinkList, Main } from './style';
import { useTabView } from './view';

function Tab({ tabList }) {
  const { makeNavLinkList } = useTabView({ tabList });

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
