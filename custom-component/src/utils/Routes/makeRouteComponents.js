import { Suspense } from 'react';
import { Route } from 'react-router-dom';

const wrapSuspense = (Component, props) => (
  <Suspense fallback={<>...Loading</>}>
    <Component {...props} />
  </Suspense>
);

export const makeRouteComponents = (lazyComponents, props) =>
  Object.keys(lazyComponents).map((tab) => {
    const path = tab === 'Index' ? '' : tab === 'PageNotFound' ? '*' : tab;

    return (
      <Route
        key={tab}
        path={path}
        element={wrapSuspense(lazyComponents[tab], props[tab] || {})}
      />
    );
  });
