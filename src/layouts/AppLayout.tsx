import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <Fragment>
      <div className="app-layout grid-col-12 grid grid-col-lg-16">
        <div className="app-layout__drawer col-span-12 col-span-lg-4 border-2 border-green hide visible-lg"></div>

        <div className="app-layout__main col-span-12 col-span-lg-12">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export { AppLayout as default };