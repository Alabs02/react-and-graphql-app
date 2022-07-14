import { Fragment } from 'react';
import { Route } from 'react-router-dom';

// MIDDLEWARES

// LAYOUTS
import { AppLayout } from '@/layouts';

// PAGES
import { Home } from '@/pages/main';

const MainRoutes = () => {
  return (
    <Fragment>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Fragment>
  );
};

export { MainRoutes as default };
