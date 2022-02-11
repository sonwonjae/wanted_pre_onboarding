import { NavLink } from 'react-router-dom';
import { NavLinkItem } from '../style';

export const useTabView = ({ tabList }) => {
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

  return { makeNavLinkList };
};
