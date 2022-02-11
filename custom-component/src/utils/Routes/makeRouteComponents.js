import { Suspense } from 'react';
import { Route } from 'react-router-dom';

const wrapSuspense = (Component) => (
  <Suspense fallback={<>...Loading</>}>
    <Component />
  </Suspense>
);

export const makeRouteComponents = (lazyComponents) =>
  Object.keys(lazyComponents).map((tab) => {
    const path = tab === 'Index' ? '' : tab === 'PageNotFound' ? '*' : tab;

    return (
      <Route
        key={tab}
        path={path}
        element={wrapSuspense(lazyComponents[tab])}
      />
    );
  });
