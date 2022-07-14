import React, { Fragment } from 'react';

// COMPONENTS
import { AppBar } from '@/components/navigation';
import { CharacterCard } from '@/components/core';

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <AppBar />

      <div className="home-page pdx-20 pdx-lg-40 wf-100 grid grid-col-12 grid-col-lg-16 mgt-32">
        <CharacterCard />
      </div>
    </Fragment>
  );
}

export { Home as default };