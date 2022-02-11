import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react/cjs/react.production.min';
import { makeRouteComponents } from 'utils';
import './App.css';

const Tab = lazy(() => import('components/Tab/Tab'));

const lazyComponents = {
  Index: lazy(() => import('components/Util/Route/Index')),
  Toggle: lazy(() => import('components/Toggle/Toggle')),
  Modal: lazy(() => import('components/Modal/Modal')),
  Tag: lazy(() => import('components/Tag/Tag')),
  AutoComplete: lazy(() => import('components/AutoComplete/AutoComplete')),
  ClickToEdit: lazy(() => import('components/ClickToEdit/ClickToEdit')),
  PageNotFound: lazy(() => import('components/Util/Route/PageNotFound')),
};

const props = {
  Modal: { children: 'HEllO CODESTATES!' },
};

const tabList = Object.keys(lazyComponents).filter(
  (tab) => tab !== 'Index' && tab !== 'PageNotFound'
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>...Loading</>}>
              <Tab tabList={tabList} />
            </Suspense>
          }
        >
          {makeRouteComponents(lazyComponents, props)}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
