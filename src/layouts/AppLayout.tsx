import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// COMPONENTS
import { AppFooter } from '@/components/navigation';

// IMAGES
import { BRAND_LOGO } from '@/assets/images';

const AppLayout = () => {
  return (
    <Fragment>
      <div className="app-layout grid-col-12 grid grid-col-lg-16">
        <div className="app-layout__drawer col-span-12 col-span-lg-4 pdx-20 pdy-40 hide visible-lg">
            <div className="drawer">
              <div className="drawer__header">
                <div className="drawer__header-media">
                  <img src={BRAND_LOGO} alt={'Brand Logo'} />
                </div>

                <div className="drawer__header-title fw-bold fs-25">
                  MOVEA
                </div>
              </div>
            </div>
        </div>

        <div className="app-layout__main col-span-12 col-span-lg-12 grid">
          <div className="app-layout__main-body">
            <Outlet />
          </div>

          <AppFooter />
        </div>
      </div>
    </Fragment>
  );
}

export { AppLayout as default };