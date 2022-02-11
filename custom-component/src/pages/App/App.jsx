import { Tab } from 'components';
import { lazy } from 'react';
import { Routes } from 'react-router-dom';
import { makeRouteComponents } from 'utils';
import './App.css';

const lazyComponents = {
  Index: lazy(() => import('components/Util/Route/Index')),
  Toggle: lazy(() => import('components/Toggle/Toggle')),
  Modal: lazy(() => import('components/Modal/Modal')),
  Tag: lazy(() => import('components/Tag/Tag')),
  AutoComplete: lazy(() => import('components/AutoComplete/AutoComplete')),
  ClickToEdit: lazy(() => import('components/ClickToEdit/ClickToEdit')),
  PageNotFound: lazy(() => import('components/Util/Route/PageNotFound')),
};

function App() {
  const tabList = Object.keys(lazyComponents);
  tabList.shift();
  tabList.pop();

  return (
    <div className="App">
      <Tab tabList={tabList}>
        <Routes>{makeRouteComponents(lazyComponents)}</Routes>
      </Tab>
    </div>
  );
}

export default App;
